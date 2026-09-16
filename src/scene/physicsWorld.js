import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { sfx } from '../utils/sfx.js';
import { getPyramidCupPositions } from './models/cupTower.js';

export class PhysicsWorld {
  constructor(scene) {
    this.scene = scene;
    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82, 0);
    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    this.world.allowSleep = true;

    // Default contact material
    const defaultMaterial = new CANNON.Material('default');
    const contactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
      friction: 0.45,
      restitution: 0.2
    });
    this.world.addContactMaterial(contactMaterial);
    this.world.defaultContactMaterial = contactMaterial;

    // Trackers
    this.cupBodies = [];
    this.cupMeshes = [];
    this.goliathBody = null;
    this.goliathMesh = null;
    this.ballBodies = [];
    this.ballMeshes = [];

    this.tableBody = null;
    this.groundBody = null;

    this.score = {
      cupsKnocked: 0,
      goliathKnocked: false,
      totalPoints: 0,
      throwsLeft: 3
    };

    this.onScoreUpdate = null;

    this.initStaticEnvironment();
  }

  initStaticEnvironment() {
    // 1. Ground Plane
    const groundShape = new CANNON.Plane();
    this.groundBody = new CANNON.Body({ mass: 0 });
    this.groundBody.addShape(groundShape);
    this.groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.world.addBody(this.groundBody);

    // 2. Table Surface
    // Tabletop at height y = 0.91, thickness 0.08, half-extents: [1.2, 0.04, 0.6]
    const tableShape = new CANNON.Box(new CANNON.Vec3(1.2, 0.04, 0.6));
    this.tableBody = new CANNON.Body({ mass: 0 });
    this.tableBody.addShape(tableShape);
    this.tableBody.position.set(0, 0.91, 0);
    this.world.addBody(this.tableBody);
  }

  setupTower(cupMeshes, goliathMesh) {
    // Clear any previous bodies
    this.clearTower();

    this.cupMeshes = cupMeshes;
    this.goliathMesh = goliathMesh;

    const positions = getPyramidCupPositions(0.95);

    // Cups physical shape (cylinder or box approximation for maximum stacking stability)
    const cupRadius = 0.13;
    const cupHeight = 0.36;
    const cupShape = new CANNON.Cylinder(cupRadius, cupRadius * 0.9, cupHeight, 12);

    positions.forEach((pos, index) => {
      const mesh = this.cupMeshes[index];
      if (!mesh) return;

      const body = new CANNON.Body({
        mass: 0.12, // lightweight plastic cup
        position: new CANNON.Vec3(pos.x, pos.y, pos.z),
        linearDamping: 0.15,
        angularDamping: 0.2
      });

      // Align CANNON cylinder with Three.js Y-axis
      const q = new CANNON.Quaternion();
      q.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
      body.addShape(cupShape, new CANNON.Vec3(0, 0, 0), q);

      body.addEventListener('collide', (e) => {
        if (e.body && e.body.isBall) {
          sfx.playCupHit();
        }
      });

      this.world.addBody(body);
      this.cupBodies.push({
        body,
        mesh,
        initialY: pos.y,
        isKnocked: false
      });
    });

    // Goliath Cardboard Cutout Body
    // Mounted atop the peak cup
    const goliathShape = new CANNON.Box(new CANNON.Vec3(0.26, 0.32, 0.015));
    this.goliathBody = new CANNON.Body({
      mass: 0.18, // slightly heavier cardboard stand
      position: new CANNON.Vec3(0, 0.95 + 0.36 * 3.5 + 0.35, 0),
      linearDamping: 0.1,
      angularDamping: 0.15
    });
    this.goliathBody.addShape(goliathShape);

    this.goliathBody.addEventListener('collide', (e) => {
      if (e.body && e.body.isBall && !this.score.goliathKnocked) {
        sfx.playGoliathBonus();
      }
    });

    this.world.addBody(this.goliathBody);
  }

  clearTower() {
    this.cupBodies.forEach(({ body }) => this.world.removeBody(body));
    this.cupBodies = [];

    if (this.goliathBody) {
      this.world.removeBody(this.goliathBody);
      this.goliathBody = null;
    }
  }

  rebuildTower() {
    const positions = getPyramidCupPositions(0.95);

    this.cupBodies.forEach((item, index) => {
      const pos = positions[index];
      item.body.position.set(pos.x, pos.y, pos.z);
      item.body.quaternion.set(0, 0, 0, 1);
      item.body.velocity.set(0, 0, 0);
      item.body.angularVelocity.set(0, 0, 0);
      item.body.wakeUp();
      item.isKnocked = false;

      item.mesh.position.copy(item.body.position);
      item.mesh.quaternion.copy(item.body.quaternion);
    });

    if (this.goliathBody && this.goliathMesh) {
      this.goliathBody.position.set(0, 0.95 + 0.36 * 3.5 + 0.35, 0);
      this.goliathBody.quaternion.set(0, 0, 0, 1);
      this.goliathBody.velocity.set(0, 0, 0);
      this.goliathBody.angularVelocity.set(0, 0, 0);
      this.goliathBody.wakeUp();

      this.goliathMesh.position.copy(this.goliathBody.position);
      this.goliathMesh.quaternion.copy(this.goliathBody.quaternion);
    }

    // Reset thrown balls
    this.clearBalls();

    // Reset round scores
    this.score.cupsKnocked = 0;
    this.score.goliathKnocked = false;
    this.score.totalPoints = 0;
    this.score.throwsLeft = 3;

    if (this.onScoreUpdate) {
      this.onScoreUpdate({ ...this.score });
    }
    sfx.playClick();
  }

  clearBalls() {
    this.ballBodies.forEach(b => this.world.removeBody(b));
    this.ballBodies = [];

    this.ballMeshes.forEach(m => this.scene.remove(m));
    this.ballMeshes = [];
  }

  throwBall(origin, impulseVector, color = 0xef4444) {
    if (this.score.throwsLeft <= 0) return null;

    this.score.throwsLeft--;

    // Create 3D Mesh
    const ballGeom = new THREE.SphereGeometry(0.12, 20, 20);
    const ballMat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.7,
      metalness: 0.1
    });
    const mesh = new THREE.Mesh(ballGeom, ballMat);
    mesh.castShadow = true;
    mesh.position.copy(origin);
    this.scene.add(mesh);
    this.ballMeshes.push(mesh);

    // Create Cannon Body
    const ballShape = new CANNON.Sphere(0.12);
    const body = new CANNON.Body({
      mass: 0.4, // substantial weight to knock over cups
      position: new CANNON.Vec3(origin.x, origin.y, origin.z),
      linearDamping: 0.05,
      angularDamping: 0.05
    });
    body.isBall = true;
    body.addShape(ballShape);

    // Apply impulse velocity
    body.velocity.set(impulseVector.x, impulseVector.y, impulseVector.z);
    this.world.addBody(body);
    this.ballBodies.push(body);

    sfx.playThrow();

    if (this.onScoreUpdate) {
      this.onScoreUpdate({ ...this.score });
    }

    return mesh;
  }

  update(deltaTime) {
    // Step simulation
    this.world.step(Math.min(deltaTime, 0.1));

    // Sync cups
    let newlyKnockedCups = 0;
    this.cupBodies.forEach(item => {
      item.mesh.position.copy(item.body.position);
      item.mesh.quaternion.copy(item.body.quaternion);

      // Check if knocked over (fallen off initial Y by > 0.08m or tilted > 40 degrees)
      const up = new CANNON.Vec3(0, 1, 0);
      const rotatedUp = item.body.vectorToWorldFrame(up);
      const tiltAngle = Math.acos(Math.max(-1, Math.min(1, rotatedUp.dot(up))));

      if (!item.isKnocked && (tiltAngle > 0.6 || Math.abs(item.body.position.y - item.initialY) > 0.1)) {
        item.isKnocked = true;
        newlyKnockedCups++;
      }
    });

    if (newlyKnockedCups > 0) {
      this.score.cupsKnocked = this.cupBodies.filter(c => c.isKnocked).length;
      this.calculateScore();
    }

    // Sync Goliath Cutout
    if (this.goliathBody && this.goliathMesh) {
      this.goliathMesh.position.copy(this.goliathBody.position);
      this.goliathMesh.quaternion.copy(this.goliathBody.quaternion);

      const up = new CANNON.Vec3(0, 1, 0);
      const rotatedUp = this.goliathBody.vectorToWorldFrame(up);
      const tilt = Math.acos(Math.max(-1, Math.min(1, rotatedUp.dot(up))));

      if (!this.score.goliathKnocked && (tilt > 0.7 || this.goliathBody.position.y < 1.9)) {
        this.score.goliathKnocked = true;
        sfx.playGoliathBonus();
        this.calculateScore();
      }
    }

    // Sync Thrown Balls
    for (let i = 0; i < this.ballBodies.length; i++) {
      if (this.ballMeshes[i]) {
        this.ballMeshes[i].position.copy(this.ballBodies[i].position);
        this.ballMeshes[i].quaternion.copy(this.ballBodies[i].quaternion);
      }
    }
  }

  calculateScore() {
    // 10 points per knocked cup, 50 points bonus for Goliath
    this.score.totalPoints = this.score.cupsKnocked * 10 + (this.score.goliathKnocked ? 50 : 0);
    if (this.onScoreUpdate) {
      this.onScoreUpdate({ ...this.score });
    }
  }
}
