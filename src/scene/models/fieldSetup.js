import * as THREE from 'three';

/**
 * Creates camp staging arena: Picnic Table, Throwing Line Tape, Ball Bucket, and Camp Elements
 */
export function createFieldSetup() {
  const group = new THREE.Group();

  // 1. Camp Ground / Floor (Rich warm grass/earth with subtle grid tone)
  const floorGeom = new THREE.PlaneGeometry(24, 28);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b, // deep slate ground
    roughness: 0.85,
    metalness: 0.1
  });
  const floorMesh = new THREE.Mesh(floorGeom, floorMat);
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  group.add(floorMesh);

  // Decorative turf mat under table
  const matGeom = new THREE.PlaneGeometry(4.5, 3.0);
  const matMat = new THREE.MeshStandardMaterial({
    color: 0x065f46, // forest green turf
    roughness: 0.9,
    metalness: 0.05
  });
  const turfMat = new THREE.Mesh(matGeom, matMat);
  turfMat.rotation.x = -Math.PI / 2;
  turfMat.position.set(0, 0.005, 0);
  turfMat.receiveShadow = true;
  group.add(turfMat);

  // 2. Staging Table (Sturdy Camp Wooden Table)
  const tableGroup = new THREE.Group();
  const woodMat = new THREE.MeshStandardMaterial({
    color: 0xb45309, // amber wood
    roughness: 0.7,
    metalness: 0.1
  });
  const legMat = new THREE.MeshStandardMaterial({
    color: 0x78350f,
    roughness: 0.8
  });

  // Tabletop: 2.2m wide, 1.0m deep, 0.08m thick at height 0.95m
  const topGeom = new THREE.BoxGeometry(2.4, 0.08, 1.2);
  const tabletop = new THREE.Mesh(topGeom, woodMat);
  tabletop.position.y = 0.91;
  tabletop.castShadow = true;
  tabletop.receiveShadow = true;
  tableGroup.add(tabletop);

  // Table legs (4 legs)
  const legGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.87, 8);
  const legCoords = [
    [-1.05, 0.435, -0.45],
    [1.05, 0.435, -0.45],
    [-1.05, 0.435, 0.45],
    [1.05, 0.435, 0.45]
  ];
  legCoords.forEach(([x, y, z]) => {
    const leg = new THREE.Mesh(legGeom, legMat);
    leg.position.set(x, y, z);
    leg.castShadow = true;
    tableGroup.add(leg);
  });

  // Table cross support stretcher
  const stretcherGeom = new THREE.BoxGeometry(2.1, 0.04, 0.04);
  const stretcher = new THREE.Mesh(stretcherGeom, legMat);
  stretcher.position.set(0, 0.25, 0);
  tableGroup.add(stretcher);

  group.add(tableGroup);

  // 3. Marked Throwing Line (at z = 4.2m)
  // Bright yellow camp masking tape with caution stripes
  const lineGroup = new THREE.Group();
  lineGroup.position.set(0, 0.01, 4.2);

  const tapeGeom = new THREE.PlaneGeometry(6.0, 0.16);
  const tapeMat = new THREE.MeshStandardMaterial({
    color: 0xfacc15, // high-visibility caution yellow
    roughness: 0.4
  });
  const tapeMesh = new THREE.Mesh(tapeGeom, tapeMat);
  tapeMesh.rotation.x = -Math.PI / 2;
  tapeMesh.receiveShadow = true;
  lineGroup.add(tapeMesh);

  // Braided Rope alongside tape
  const ropeGeom = new THREE.CylinderGeometry(0.025, 0.025, 6.0, 12);
  const ropeMat = new THREE.MeshStandardMaterial({
    color: 0xd97706,
    roughness: 0.9
  });
  const ropeMesh = new THREE.Mesh(ropeGeom, ropeMat);
  ropeMesh.rotation.z = Math.PI / 2;
  ropeMesh.position.set(0, 0.025, -0.1);
  ropeMesh.castShadow = true;
  lineGroup.add(ropeMesh);

  // 2 Orange Safety Cones at the edges of the throwing line
  const coneGeom = new THREE.ConeGeometry(0.16, 0.45, 16);
  const coneMat = new THREE.MeshStandardMaterial({
    color: 0xf97316,
    roughness: 0.5
  });
  [-3.0, 3.0].forEach(x => {
    const cone = new THREE.Mesh(coneGeom, coneMat);
    cone.position.set(x, 0.225, 0);
    cone.castShadow = true;
    lineGroup.add(cone);
  });

  group.add(lineGroup);

  // 4. Ball Bucket with 5 Soft Felt / Sock Balls
  const bucketGroup = new THREE.Group();
  bucketGroup.position.set(1.4, 0, 4.6); // Placed right behind the throw line

  // Bucket body
  const bucketGeom = new THREE.CylinderGeometry(0.24, 0.18, 0.38, 20, 1, true);
  const bucketMat = new THREE.MeshStandardMaterial({
    color: 0x3b82f6, // bright blue bucket
    roughness: 0.4,
    side: THREE.DoubleSide
  });
  const bucketMesh = new THREE.Mesh(bucketGeom, bucketMat);
  bucketMesh.position.y = 0.19;
  bucketMesh.castShadow = true;
  bucketGroup.add(bucketMesh);

  const bucketBottomGeom = new THREE.CircleGeometry(0.18, 20);
  const bucketBottom = new THREE.Mesh(bucketBottomGeom, bucketMat);
  bucketBottom.rotation.x = Math.PI / 2;
  bucketBottom.position.y = 0.01;
  bucketGroup.add(bucketBottom);

  // Soft Balls inside bucket (red, yellow, green, blue, purple)
  const ballColors = [0xef4444, 0x10b981, 0xf59e0b, 0x8b5cf6, 0xec4899];
  const ballGeom = new THREE.SphereGeometry(0.09, 16, 16);

  const ballOffsets = [
    [-0.06, 0.25, -0.05],
    [0.07, 0.26, 0.04],
    [-0.02, 0.32, 0.05],
    [0.08, 0.24, -0.07],
    [-0.07, 0.24, 0.06]
  ];

  ballOffsets.forEach((pos, idx) => {
    const ballMat = new THREE.MeshStandardMaterial({
      color: ballColors[idx % ballColors.length],
      roughness: 0.9, // felt texture
      metalness: 0.0
    });
    const ball = new THREE.Mesh(ballGeom, ballMat);
    ball.position.set(...pos);
    ball.castShadow = true;
    bucketGroup.add(ball);
  });

  group.add(bucketGroup);

  // 5. Camp Pennants & Banner in Background (at z = -3.5m)
  const bannerGroup = new THREE.Group();
  bannerGroup.position.set(0, 0, -3.2);

  // 2 wooden poles
  const poleGeom = new THREE.CylinderGeometry(0.04, 0.04, 3.2, 8);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
  [-3.8, 3.8].forEach(x => {
    const pole = new THREE.Mesh(poleGeom, poleMat);
    pole.position.set(x, 1.6, 0);
    pole.castShadow = true;
    bannerGroup.add(pole);
  });

  // String wire
  const stringGeom = new THREE.CylinderGeometry(0.008, 0.008, 7.6, 6);
  const stringMesh = new THREE.Mesh(stringGeom, poleMat);
  stringMesh.rotation.z = Math.PI / 2;
  stringMesh.position.set(0, 3.0, 0);
  bannerGroup.add(stringMesh);

  // Triangle pennant flags
  const pennantColors = [0xef4444, 0xf59e0b, 0x10b981, 0x3b82f6, 0x8b5cf6, 0xec4899];
  const pennantGeom = new THREE.ConeGeometry(0.2, 0.45, 3);
  for (let i = -3.2; i <= 3.2; i += 0.55) {
    const color = pennantColors[Math.floor(Math.random() * pennantColors.length)];
    const pMat = new THREE.MeshStandardMaterial({ color, roughness: 0.6, side: THREE.DoubleSide });
    const flag = new THREE.Mesh(pennantGeom, pMat);
    flag.position.set(i, 2.76, 0);
    flag.rotation.x = Math.PI; // pointing down
    bannerGroup.add(flag);
  }

  group.add(bannerGroup);

  return {
    group,
    tableGroup,
    lineGroup,
    bucketGroup,
    bannerGroup
  };
}
