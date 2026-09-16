import * as THREE from 'three';

/**
 * 3D Models for "The Lava Marsh"
 */
export function createLavaMarshScene() {
  const group = new THREE.Group();

  // 1. Lava Basin
  const lavaGeom = new THREE.PlaneGeometry(16, 22);
  const lavaMat = new THREE.MeshStandardMaterial({
    color: 0xc2410c, // glowing molten orange
    roughness: 0.3,
    metalness: 0.1,
    emissive: 0x7c2d12,
    emissiveIntensity: 0.35
  });
  const lavaMesh = new THREE.Mesh(lavaGeom, lavaMat);
  lavaMesh.rotation.x = -Math.PI / 2;
  lavaMesh.position.y = 0.02;
  group.add(lavaMesh);

  // 2. Start and Rescue Bank Island Mats (Safe zones)
  const bankGeom = new THREE.BoxGeometry(14, 0.12, 3.5);
  const bankMat = new THREE.MeshStandardMaterial({
    color: 0x166534, // emerald safe grass
    roughness: 0.8
  });

  const startBank = new THREE.Mesh(bankGeom, bankMat);
  startBank.position.set(0, 0.06, 6.5);
  startBank.castShadow = true;
  startBank.receiveShadow = true;
  group.add(startBank);

  const finishBank = new THREE.Mesh(bankGeom, bankMat);
  finishBank.position.set(0, 0.06, -6.5);
  finishBank.castShadow = true;
  finishBank.receiveShadow = true;
  group.add(finishBank);

  // 3. Stepping Stone Discs / Tiles
  const tileGeom = new THREE.CylinderGeometry(0.42, 0.45, 0.08, 16);
  const stoneMat = new THREE.MeshStandardMaterial({
    color: 0x78716c, // grey river stone
    roughness: 0.9,
    metalness: 0.1
  });

  const stoneCoordinates = [
    // Team A lane
    [-3.2, 0.05, 3.8],
    [-2.8, 0.05, 1.4],
    [-3.4, 0.05, -1.2],
    [-3.0, 0.05, -3.6],
    // Team B lane
    [3.2, 0.05, 3.5],
    [3.5, 0.05, 1.0],
    [2.9, 0.05, -1.5],
    [3.3, 0.05, -3.8]
  ];

  stoneCoordinates.forEach(([x, y, z]) => {
    const stone = new THREE.Mesh(tileGeom, stoneMat);
    stone.position.set(x, y, z);
    stone.castShadow = true;
    stone.receiveShadow = true;
    group.add(stone);
  });

  // 4. River Boundary Cones
  const coneGeom = new THREE.ConeGeometry(0.18, 0.5, 16);
  const coneMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.5 });
  [-7.0, 7.0].forEach(x => {
    [-4.5, 0, 4.5].forEach(z => {
      const cone = new THREE.Mesh(coneGeom, coneMat);
      cone.position.set(x, 0.25, z);
      cone.castShadow = true;
      group.add(cone);
    });
  });

  return group;
}

/**
 * 3D Models for "Fortress Siege"
 */
export function createFortressSiegeScene() {
  const group = new THREE.Group();

  // 1. Centerline rope & boundary
  const ropeGeom = new THREE.CylinderGeometry(0.03, 0.03, 16, 12);
  const ropeMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.8 });
  const rope = new THREE.Mesh(ropeGeom, ropeMat);
  rope.rotation.z = Math.PI / 2;
  rope.position.set(0, 0.03, 0);
  rope.castShadow = true;
  group.add(rope);

  // 2. Team Fortresses (Red Base & Blue Base)
  const createFort = (colorHex, flagColor, zPos) => {
    const fortGroup = new THREE.Group();
    fortGroup.position.set(0, 0, zPos);

    // Sandbag / wood barricade
    const wallMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.7 });
    const wallGeom = new THREE.BoxGeometry(4.0, 0.65, 0.4);
    const wall = new THREE.Mesh(wallGeom, wallMat);
    wall.position.y = 0.325;
    wall.castShadow = true;
    fortGroup.add(wall);

    // Flagpole
    const poleGeom = new THREE.CylinderGeometry(0.04, 0.04, 3.2, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.7, roughness: 0.3 });
    const pole = new THREE.Mesh(poleGeom, poleMat);
    pole.position.set(0, 1.6, -0.4);
    pole.castShadow = true;
    fortGroup.add(pole);

    // Team Flag
    const flagGeom = new THREE.BoxGeometry(0.9, 0.55, 0.02);
    const flagMat = new THREE.MeshStandardMaterial({ color: flagColor, roughness: 0.5 });
    const flag = new THREE.Mesh(flagGeom, flagMat);
    flag.position.set(0.45, 2.7, -0.4);
    flag.castShadow = true;
    fortGroup.add(flag);

    // Prison Circle
    const prisonGeom = new THREE.TorusGeometry(1.2, 0.04, 8, 24);
    const prisonMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.5 });
    const prison = new THREE.Mesh(prisonGeom, prisonMat);
    prison.rotation.x = Math.PI / 2;
    prison.position.set(4.5, 0.02, 0);
    fortGroup.add(prison);

    return fortGroup;
  };

  group.add(createFort(0x991b1b, 0xef4444, -6.5)); // Red Team Empire
  group.add(createFort(0x1e40af, 0x3b82f6, 6.5));  // Blue Team Empire

  return group;
}
