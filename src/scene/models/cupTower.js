import * as THREE from 'three';

/**
 * Creates the cardboard Goliath graphic texture dynamically using HTML5 Canvas.
 * No external image assets needed; crisp, scalable, and stylized.
 */
export function createGoliathTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 680;
  const ctx = canvas.getContext('2d');

  // Clean cardboard background texture
  ctx.fillStyle = '#f5dfbb';
  ctx.fillRect(0, 0, 512, 680);

  // Subtle craft card grain
  ctx.strokeStyle = 'rgba(180, 130, 80, 0.25)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 680; i += 12) {
    ctx.beginPath();
    ctx.moveTo(0, i + Math.random() * 3);
    ctx.lineTo(512, i + Math.random() * 3);
    ctx.stroke();
  }

  // Die-cut border with scissor guide marker
  ctx.strokeStyle = '#92400e';
  ctx.lineWidth = 6;
  ctx.strokeRect(12, 12, 488, 656);

  // Draw Cartoon Goliath character matching reference photo:
  // 1. Spear (Right Hand)
  ctx.strokeStyle = '#854d0e'; // wooden spear shaft
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(395, 600);
  ctx.lineTo(395, 70);
  ctx.stroke();

  // Spearhead
  ctx.fillStyle = '#bae6fd';
  ctx.strokeStyle = '#0284c7';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(395, 30);
  ctx.lineTo(418, 90);
  ctx.lineTo(395, 80);
  ctx.lineTo(372, 90);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // 2. Legs & Roman Sandals
  ctx.fillStyle = '#fcd34d'; // legs skin
  ctx.fillRect(190, 430, 36, 120);
  ctx.fillRect(260, 430, 36, 120);

  // Sandal straps
  ctx.strokeStyle = '#451a03';
  ctx.lineWidth = 6;
  for (let y = 460; y <= 540; y += 18) {
    ctx.beginPath();
    ctx.moveTo(186, y);
    ctx.lineTo(230, y + 10);
    ctx.moveTo(230, y);
    ctx.lineTo(186, y + 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(256, y);
    ctx.lineTo(300, y + 10);
    ctx.moveTo(300, y);
    ctx.lineTo(256, y + 10);
    ctx.stroke();
  }

  // Sandal soles
  ctx.fillStyle = '#451a03';
  ctx.fillRect(175, 550, 56, 18);
  ctx.fillRect(255, 550, 56, 18);

  // 3. Warrior Tunic / Armor Skirt
  ctx.fillStyle = '#78350f';
  ctx.beginPath();
  ctx.moveTo(165, 360);
  ctx.lineTo(320, 360);
  ctx.lineTo(340, 445);
  ctx.lineTo(145, 445);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#451a03';
  ctx.lineWidth = 5;
  ctx.stroke();

  // Armor pleats
  for (let x = 180; x < 320; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 360);
    ctx.lineTo(x - 5, 445);
    ctx.stroke();
  }

  // Torso / Bronze Chestplate
  ctx.fillStyle = '#d97706';
  ctx.fillRect(175, 270, 135, 95);
  ctx.fillStyle = '#b45309';
  ctx.fillRect(175, 345, 135, 20); // belt

  // 4. Arms
  ctx.fillStyle = '#fcd34d'; // right arm holding spear
  ctx.beginPath();
  ctx.arc(350, 320, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // 5. Round Shield (Left Side)
  const shieldX = 145;
  const shieldY = 280;
  const shieldR = 75;

  // Outer rim
  ctx.fillStyle = '#0284c7';
  ctx.beginPath();
  ctx.arc(shieldX, shieldY, shieldR, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#0c4a6e';
  ctx.lineWidth = 6;
  ctx.stroke();

  // Inner metallic shield disc
  const grad = ctx.createRadialGradient(shieldX, shieldY, 5, shieldX, shieldY, shieldR - 8);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.3, '#bae6fd');
  grad.addColorStop(1, '#0284c7');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(shieldX, shieldY, shieldR - 8, 0, Math.PI * 2);
  ctx.fill();

  // Shield boss (center gold knob)
  ctx.fillStyle = '#fbbf24';
  ctx.beginPath();
  ctx.arc(shieldX, shieldY, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#92400e';
  ctx.lineWidth = 4;
  ctx.stroke();

  // 6. Goliath Head, Beard & Hair
  // Dark curly beard background
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.arc(245, 240, 68, 0, Math.PI * 2);
  ctx.fill();

  // Face
  ctx.fillStyle = '#fcd34d';
  ctx.beginPath();
  ctx.arc(245, 195, 48, 0, Math.PI * 2);
  ctx.fill();

  // Bushy Beard & Mustache
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.arc(245, 225, 45, 0, Math.PI);
  ctx.closePath();
  ctx.fill();

  // Mustache
  ctx.beginPath();
  ctx.ellipse(245, 212, 38, 14, 0, 0, Math.PI * 2);
  ctx.fill();

  // Angry comic warrior eyebrows
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(205, 175);
  ctx.lineTo(238, 192);
  ctx.moveTo(285, 175);
  ctx.lineTo(252, 192);
  ctx.stroke();

  // Eyes
  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.arc(224, 196, 6, 0, Math.PI * 2);
  ctx.arc(266, 196, 6, 0, Math.PI * 2);
  ctx.fill();

  // Nose
  ctx.strokeStyle = '#b45309';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(245, 204, 7, 0, Math.PI);
  ctx.stroke();

  // 7. Warrior Helmet (with brow band and nose guard)
  ctx.fillStyle = '#64748b';
  ctx.beginPath();
  ctx.arc(245, 168, 54, Math.PI * 0.95, Math.PI * 2.05);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 5;
  ctx.stroke();

  // Helmet metal band with rivets
  ctx.fillStyle = '#475569';
  ctx.fillRect(190, 160, 110, 16);
  ctx.fillStyle = '#f8fafc';
  for (let rx = 198; rx <= 292; rx += 18) {
    ctx.beginPath();
    ctx.arc(rx, 168, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Helmet crest spike
  ctx.fillStyle = '#94a3b8';
  ctx.beginPath();
  ctx.moveTo(245, 88);
  ctx.lineTo(258, 118);
  ctx.lineTo(232, 118);
  ctx.closePath();
  ctx.fill();

  // Bottom Label Badge: "GOLIATH — TARGET CROWN"
  ctx.fillStyle = '#1e1b4b';
  ctx.roundRect ? ctx.roundRect(40, 608, 432, 48, 12) : ctx.fillRect(40, 608, 432, 48);
  ctx.fill();
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = '#fbbf24';
  ctx.font = '800 24px "Outfit", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('GOLIATH TARGET (+50 BONUS PTS)', 256, 632);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Procedural Mint-Teal Party Cup geometry and material (matching user reference photo)
 */
export function createCupMesh(isMetallic = false) {
  const group = new THREE.Group();

  // Cup dimensions: height ~ 0.38m, top radius ~ 0.16m, bottom radius ~ 0.11m
  const radiusTop = 0.15;
  const radiusBottom = 0.11;
  const height = 0.36;

  const cupGeom = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 24, 1, true);

  let material;
  if (isMetallic) {
    // Recycled aluminum / tin can alternative
    material = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      metalness: 0.88,
      roughness: 0.22,
      side: THREE.DoubleSide
    });
  } else {
    // Mint-teal pastel plastic cup matching the user's reference photo
    material = new THREE.MeshStandardMaterial({
      color: 0x42dbb8, // mint green/teal as shown in user photo
      roughness: 0.32,
      metalness: 0.08,
      side: THREE.DoubleSide
    });
  }

  const cupBody = new THREE.Mesh(cupGeom, material);
  cupBody.castShadow = true;
  cupBody.receiveShadow = true;
  group.add(cupBody);

  // Bottom disc
  const bottomGeom = new THREE.CircleGeometry(radiusBottom, 24);
  const bottomMesh = new THREE.Mesh(bottomGeom, material);
  bottomMesh.rotation.x = Math.PI / 2;
  bottomMesh.position.y = -height / 2;
  bottomMesh.receiveShadow = true;
  group.add(bottomMesh);

  // Top rolled rim
  const rimGeom = new THREE.TorusGeometry(radiusTop, 0.012, 12, 32);
  const rimMat = new THREE.MeshStandardMaterial({
    color: isMetallic ? 0xe5e7eb : 0x5eead4,
    roughness: 0.2
  });
  const rimMesh = new THREE.Mesh(rimGeom, rimMat);
  rimMesh.rotation.x = Math.PI / 2;
  rimMesh.position.y = height / 2;
  group.add(rimMesh);

  // Grip ribbing rings along cup
  for (let i = -0.06; i <= 0.08; i += 0.05) {
    const ringRadius = radiusBottom + ((i + height / 2) / height) * (radiusTop - radiusBottom);
    const ringGeom = new THREE.TorusGeometry(ringRadius, 0.005, 8, 24);
    const ringMesh = new THREE.Mesh(ringGeom, material);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = i;
    group.add(ringMesh);
  }

  return group;
}

/**
 * Creates the Goliath cardboard cutout stand
 */
export function createGoliathCutout() {
  const group = new THREE.Group();
  const texture = createGoliathTexture();

  const width = 0.52;
  const height = 0.65;
  const depth = 0.015;

  // Front cardboard with Goliath face texture
  const frontMat = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.8,
    metalness: 0.05
  });

  // Cardboard core & edge material
  const edgeMat = new THREE.MeshStandardMaterial({
    color: 0xb45309,
    roughness: 0.9
  });

  const materials = [
    edgeMat, // right
    edgeMat, // left
    edgeMat, // top
    edgeMat, // bottom
    frontMat, // front
    edgeMat  // back
  ];

  const cutoutGeom = new THREE.BoxGeometry(width, height, depth);
  const cutoutMesh = new THREE.Mesh(cutoutGeom, materials);
  cutoutMesh.castShadow = true;
  cutoutMesh.receiveShadow = true;
  cutoutMesh.position.y = height / 2;
  group.add(cutoutMesh);

  // Tape strips on bottom that attach to the top cup
  const tapeMat = new THREE.MeshStandardMaterial({
    color: 0xfef08a,
    roughness: 0.4,
    transparent: true,
    opacity: 0.85
  });
  const tapeGeom = new THREE.BoxGeometry(0.06, 0.12, 0.004);

  const tapeLeft = new THREE.Mesh(tapeGeom, tapeMat);
  tapeLeft.position.set(-0.14, 0.02, 0.01);
  tapeLeft.rotation.z = -0.15;
  group.add(tapeLeft);

  const tapeRight = new THREE.Mesh(tapeGeom, tapeMat);
  tapeRight.position.set(0.14, 0.02, 0.01);
  tapeRight.rotation.z = 0.18;
  group.add(tapeRight);

  return group;
}

/**
 * Generates initial positions for a 10-cup pyramid (4 base, 3 second, 2 third, 1 top)
 * Returns array of { x, y, z, tier, index }
 */
export function getPyramidCupPositions(baseY = 0.95) {
  const cupSpacing = 0.32;
  const tierHeight = 0.36;
  const positions = [];

  const tiers = [
    { count: 4, y: baseY + tierHeight / 2 },
    { count: 3, y: baseY + tierHeight * 1.5 },
    { count: 2, y: baseY + tierHeight * 2.5 },
    { count: 1, y: baseY + tierHeight * 3.5 }
  ];

  let cupId = 0;
  tiers.forEach((tierInfo, tierIndex) => {
    const rowWidth = (tierInfo.count - 1) * cupSpacing;
    const startX = -rowWidth / 2;

    for (let c = 0; c < tierInfo.count; c++) {
      positions.push({
        id: cupId++,
        tier: tierIndex,
        x: startX + c * cupSpacing,
        y: tierInfo.y,
        z: 0,
        isTop: tierIndex === 3
      });
    }
  });

  return positions;
}
