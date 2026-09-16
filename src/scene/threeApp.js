import * as THREE from 'three';
import { createCupMesh, createGoliathCutout, getPyramidCupPositions } from './models/cupTower.js';
import { createFieldSetup } from './models/fieldSetup.js';
import { createLavaMarshScene, createFortressSiegeScene } from './models/otherGames.js';
import { PhysicsWorld } from './physicsWorld.js';

export class ThreeApp {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.width = canvasContainer.clientWidth || window.innerWidth;
    this.height = canvasContainer.clientHeight || window.innerHeight;

    // Active Game ID
    this.activeGameId = 'david-and-goliath';

    // Free Orbit vs Automated Presentation Camera
    this.isFreeOrbit = false;
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.spherical = { radius: 8.5, theta: 0, phi: Math.PI / 3 };

    // Target camera and lookAt
    this.cameraPos = new THREE.Vector3(0, 3.5, 8.5);
    this.cameraTarget = new THREE.Vector3(0, 1.8, 0);
    this.desiredPos = new THREE.Vector3(0, 3.2, 7.8);
    this.desiredTarget = new THREE.Vector3(0, 1.6, 0);

    this.initScene();
    this.initLights();
    this.initGameModels();
    this.initEventListeners();

    this.clock = new THREE.Clock();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x090d16); // dark slate dusk
    this.scene.fog = new THREE.FogExp2(0x090d16, 0.025);

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 100);
    this.camera.position.copy(this.cameraPos);
    this.camera.lookAt(this.cameraTarget);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.container.appendChild(this.renderer.domElement);

    // Physics Engine
    this.physics = new PhysicsWorld(this.scene);
  }

  initLights() {
    // Ambient fill
    const ambient = new THREE.AmbientLight(0x38bdf8, 0.65);
    this.scene.add(ambient);

    // Sun Key Light (Warm golden sunlight)
    const sunLight = new THREE.DirectionalLight(0xffedd5, 2.4);
    sunLight.position.set(6, 12, 8);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 30;
    sunLight.shadow.camera.left = -6;
    sunLight.shadow.camera.right = 6;
    sunLight.shadow.camera.top = 6;
    sunLight.shadow.camera.bottom = -6;
    sunLight.shadow.bias = -0.0005;
    this.scene.add(sunLight);

    // Rim/Backlight for beautiful edge highlights on cups and Goliath
    const rimLight = new THREE.DirectionalLight(0xf59e0b, 1.2);
    rimLight.position.set(-6, 8, -6);
    this.scene.add(rimLight);

    // Soft Table Uplight
    const pointLight = new THREE.PointLight(0xec4899, 0.8, 8);
    pointLight.position.set(0, 0.8, 1.2);
    this.scene.add(pointLight);
  }

  initGameModels() {
    // Root group for all David and Goliath items
    this.davidGoliathGroup = new THREE.Group();
    this.scene.add(this.davidGoliathGroup);

    // 1. Field Setup (ground, table, throw line, bucket, pennants)
    this.fieldSetup = createFieldSetup();
    this.davidGoliathGroup.add(this.fieldSetup.group);

    // 2. Cup Tower (10 Cups)
    this.cupMeshes = [];
    const positions = getPyramidCupPositions(0.95);
    positions.forEach(pos => {
      const cup = createCupMesh(false);
      cup.position.set(pos.x, pos.y, pos.z);
      this.davidGoliathGroup.add(cup);
      this.cupMeshes.push(cup);
    });

    // 3. Goliath Cutout atop peak cup
    this.goliathMesh = createGoliathCutout();
    this.goliathMesh.position.set(0, 0.95 + 0.36 * 3.5 + 0.35, 0);
    this.davidGoliathGroup.add(this.goliathMesh);

    // Bind Physics
    this.physics.setupTower(this.cupMeshes, this.goliathMesh);

    // Companion Games
    this.lavaMarshGroup = createLavaMarshScene();
    this.lavaMarshGroup.visible = false;
    this.scene.add(this.lavaMarshGroup);

    this.fortressSiegeGroup = createFortressSiegeScene();
    this.fortressSiegeGroup.visible = false;
    this.scene.add(this.fortressSiegeGroup);
  }

  setGame(gameId) {
    const isGoliath = gameId === 'goliath-slingshot' || gameId === 'david-and-goliath';
    this.davidGoliathGroup.visible = isGoliath;
    this.lavaMarshGroup.visible = gameId === 'lava-marsh';
    this.fortressSiegeGroup.visible = gameId === 'fortress-siege';

    if (isGoliath) {
      this.physics.rebuildTower();
      this.setCameraPreset({ x: 0, y: 3.2, z: 7.8, targetX: 0, targetY: 1.6, targetZ: 0 });
    } else if (gameId === 'lava-marsh') {
      this.setCameraPreset({ x: 0, y: 5.5, z: 9.0, targetX: 0, targetY: 0.5, targetZ: 0 });
    } else if (gameId === 'fortress-siege') {
      this.setCameraPreset({ x: 0, y: 7.0, z: 12.0, targetX: 0, targetY: 0, targetZ: 0 });
    }
  }

  setCameraPreset(preset) {
    if (!preset) return;
    this.desiredPos.set(preset.x, preset.y, preset.z);
    this.desiredTarget.set(preset.targetX, preset.targetY, preset.targetZ);
    this.isFreeOrbit = false;
  }

  setAssemblyStep(stepNumber) {
    if (this.activeGameId !== 'david-and-goliath') return;

    // Interactive step filtering:
    // Step 1: Base cups (tier 0) visible, upper cups semi-transparent or appearing
    // Step 2: Goliath craft drawing focus
    // Step 3: Goliath mounted atop peak cup
    // Step 4: Marked throwing line highlight
    // Step 5: Full arena ready

    const positions = getPyramidCupPositions(0.95);

    if (stepNumber === 1) {
      // Show only tier 0 (4 base cups)
      this.cupMeshes.forEach((cup, i) => {
        cup.visible = positions[i].tier === 0;
      });
      this.goliathMesh.visible = false;
      this.setCameraPreset({ x: 0, y: 1.8, z: 3.2, targetX: 0, targetY: 1.2, targetZ: 0 });
    } else if (stepNumber === 2) {
      // Crafting Goliath
      this.cupMeshes.forEach((cup, i) => {
        cup.visible = positions[i].tier === 0;
      });
      this.goliathMesh.visible = true;
      this.goliathMesh.position.set(0.6, 1.25, 0.4);
      this.setCameraPreset({ x: 0.6, y: 1.6, z: 2.2, targetX: 0.6, targetY: 1.3, targetZ: 0.4 });
    } else if (stepNumber === 3) {
      // Full tower + Goliath mounted on peak
      this.cupMeshes.forEach(cup => { cup.visible = true; });
      this.goliathMesh.visible = true;
      this.goliathMesh.position.set(0, 0.95 + 0.36 * 3.5 + 0.35, 0);
      this.setCameraPreset({ x: 0, y: 2.5, z: 3.8, targetX: 0, targetY: 2.0, targetZ: 0 });
    } else if (stepNumber === 4) {
      // Throwing line
      this.cupMeshes.forEach(cup => { cup.visible = true; });
      this.goliathMesh.visible = true;
      this.setCameraPreset({ x: 3.5, y: 3.2, z: 5.5, targetX: 0, targetY: 0.5, targetZ: 4.2 });
    } else {
      // Full ready
      this.cupMeshes.forEach(cup => { cup.visible = true; });
      this.goliathMesh.visible = true;
      this.setCameraPreset({ x: 0, y: 3.2, z: 8.0, targetX: 0, targetY: 1.7, targetZ: 0 });
    }
  }

  toggleFreeOrbit() {
    this.isFreeOrbit = !this.isFreeOrbit;
    return this.isFreeOrbit;
  }

  resetToSlideView() {
    this.isFreeOrbit = false;
  }

  // Interactive Throw Mini-Game Trigger
  triggerThrow(targetX = 0, targetY = 2.1, power = 1.0) {
    if (this.activeGameId !== 'david-and-goliath') return;

    // Origin: camper standing behind throw line
    const origin = new THREE.Vector3(
      (Math.random() - 0.5) * 0.4,
      1.7,
      4.2
    );

    // Calculate impulse vector directed at target with slight arc
    const dir = new THREE.Vector3(
      (targetX - origin.x) * 2.8,
      (targetY - origin.y) * 2.8 + 1.8 * power,
      -8.5 * power
    );

    const colors = [0xef4444, 0x3b82f6, 0x10b981, 0xf59e0b, 0x8b5cf6];
    const ballColor = colors[Math.floor(Math.random() * colors.length)];

    this.physics.throwBall(origin, dir, ballColor);
  }

  initEventListeners() {
    window.addEventListener('resize', () => {
      this.width = this.container.clientWidth || window.innerWidth;
      this.height = this.container.clientHeight || window.innerHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    });

    // Orbit Drag Controls on Canvas
    const canvas = this.renderer.domElement;

    canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMousePosition.x;
      const deltaY = e.clientY - this.previousMousePosition.y;

      if (this.isFreeOrbit) {
        // Orbit around cameraTarget
        const rotSpeed = 0.005;
        const offset = new THREE.Vector3().subVectors(this.cameraPos, this.cameraTarget);

        // Spherical coords update
        let radius = offset.length();
        let theta = Math.atan2(offset.x, offset.z) - deltaX * rotSpeed;
        let phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius))) - deltaY * rotSpeed;
        phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, phi)); // Don't flip or dip under ground

        this.cameraPos.x = this.cameraTarget.x + radius * Math.sin(phi) * Math.sin(theta);
        this.cameraPos.y = this.cameraTarget.y + radius * Math.cos(phi);
        this.cameraPos.z = this.cameraTarget.z + radius * Math.sin(phi) * Math.cos(theta);
      }

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch support for mobile devices
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
      const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

      if (this.isFreeOrbit) {
        const rotSpeed = 0.006;
        const offset = new THREE.Vector3().subVectors(this.cameraPos, this.cameraTarget);
        let radius = offset.length();
        let theta = Math.atan2(offset.x, offset.z) - deltaX * rotSpeed;
        let phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius))) - deltaY * rotSpeed;
        phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, phi));

        this.cameraPos.x = this.cameraTarget.x + radius * Math.sin(phi) * Math.sin(theta);
        this.cameraPos.y = this.cameraTarget.y + radius * Math.cos(phi);
        this.cameraPos.z = this.cameraTarget.z + radius * Math.sin(phi) * Math.cos(theta);
      }

      this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    const deltaTime = this.clock.getDelta();

    // Step physics if David and Goliath is active
    if (this.activeGameId === 'david-and-goliath') {
      this.physics.update(deltaTime);
    }

    // Camera Lerp interpolation when not in manual free orbit
    if (!this.isFreeOrbit) {
      this.cameraPos.lerp(this.desiredPos, 0.06);
      this.cameraTarget.lerp(this.desiredTarget, 0.06);
    }

    this.camera.position.copy(this.cameraPos);
    this.camera.lookAt(this.cameraTarget);

    // Subtle decorative sway on pennant flags
    if (this.fieldSetup && this.fieldSetup.bannerGroup) {
      const time = this.clock.getElapsedTime();
      this.fieldSetup.bannerGroup.children.forEach((child, i) => {
        if (child.geometry instanceof THREE.ConeGeometry) {
          child.rotation.z = Math.sin(time * 2.5 + i * 0.7) * 0.12;
        }
      });
    }

    this.renderer.render(this.scene, this.camera);
  }
}
