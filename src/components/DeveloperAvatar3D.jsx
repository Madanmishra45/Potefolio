import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DeveloperAvatar3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // =========================================================================
    // LIGHTING SYSTEM (Cinematic Cyan + Purple Rim Lights)
    // =========================================================================
    const ambientLight = new THREE.AmbientLight(0x0a101d, 2.5);
    scene.add(ambientLight);

    // Front soft key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(2, 4, 5);
    scene.add(keyLight);

    // Left Cyan Rim Light
    const cyanRimLight = new THREE.PointLight(0x00f0ff, 8, 20);
    cyanRimLight.position.set(-3.5, 2, -1.5);
    scene.add(cyanRimLight);

    // Right Purple Rim Light
    const purpleRimLight = new THREE.PointLight(0xa855f7, 8, 20);
    purpleRimLight.position.set(3.5, -1, -1.5);
    scene.add(purpleRimLight);

    // Dynamic Cursor Tracking Light
    const mouseLight = new THREE.PointLight(0x00f0ff, 3, 10);
    mouseLight.position.set(0, 0, 3);
    scene.add(mouseLight);

    // =========================================================================
    // 3D AVATAR CHARACTER CONSTRUCTION
    // =========================================================================
    const avatarGroup = new THREE.Group();
    scene.add(avatarGroup);

    // Base Metallic Material
    const darkMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0x111625,
      roughness: 0.25,
      metalness: 0.85
    });

    const cyanGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.5,
      roughness: 0.1
    });

    const purpleGlowMaterial = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 2.2,
      roughness: 0.1
    });

    const glassVisorMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x00d2ff,
      emissiveIntensity: 1.8,
      transparent: true,
      opacity: 0.9,
      roughness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.1
    });

    // 1. HEAD
    const headGeo = new THREE.SphereGeometry(0.78, 32, 32);
    headGeo.scale(1, 1.15, 0.95);
    const headMesh = new THREE.Mesh(headGeo, darkMetalMaterial);
    headMesh.position.y = 0.95;
    avatarGroup.add(headMesh);

    // 2. CYBER VISOR / VR GOGGLES
    const visorGeo = new THREE.CylinderGeometry(0.68, 0.72, 0.32, 32, 1, false, Math.PI * 0.15, Math.PI * 0.7);
    visorGeo.rotateX(Math.PI * 0.5);
    visorGeo.rotateY(Math.PI * 0.5);
    const visorMesh = new THREE.Mesh(visorGeo, glassVisorMaterial);
    visorMesh.position.set(0, 1.05, 0.42);
    avatarGroup.add(visorMesh);

    // Visor Neon Frame Strip
    const frameGeo = new THREE.TorusGeometry(0.72, 0.02, 16, 32, Math.PI * 0.8);
    frameGeo.rotateY(Math.PI * 0.1);
    const frameMesh = new THREE.Mesh(frameGeo, cyanGlowMaterial);
    frameMesh.position.set(0, 1.05, 0.44);
    avatarGroup.add(frameMesh);

    // 3. HEADPHONES / CYBER HEADSET
    const headphoneLeftGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.15, 24);
    headphoneLeftGeo.rotateZ(Math.PI * 0.5);
    const headphoneLeft = new THREE.Mesh(headphoneLeftGeo, darkMetalMaterial);
    headphoneLeft.position.set(-0.82, 1.0, 0);
    avatarGroup.add(headphoneLeft);

    const headphoneRingLeft = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 16, 24), purpleGlowMaterial);
    headphoneRingLeft.position.set(-0.9, 1.0, 0);
    headphoneRingLeft.rotation.y = Math.PI * 0.5;
    avatarGroup.add(headphoneRingLeft);

    const headphoneRight = headphoneLeft.clone();
    headphoneRight.position.set(0.82, 1.0, 0);
    avatarGroup.add(headphoneRight);

    const headphoneRingRight = headphoneRingLeft.clone();
    headphoneRingRight.position.set(0.9, 1.0, 0);
    avatarGroup.add(headphoneRingRight);

    // Headband
    const headbandGeo = new THREE.TorusGeometry(0.82, 0.04, 16, 32, Math.PI);
    headbandGeo.rotateZ(Math.PI);
    const headbandMesh = new THREE.Mesh(headbandGeo, darkMetalMaterial);
    headbandMesh.position.set(0, 1.25, 0);
    avatarGroup.add(headbandMesh);

    // 4. NECK
    const neckGeo = new THREE.CylinderGeometry(0.35, 0.42, 0.35, 24);
    const neckMesh = new THREE.Mesh(neckGeo, darkMetalMaterial);
    neckMesh.position.y = 0.45;
    avatarGroup.add(neckMesh);

    // Neck Neon Ring
    const neckRing = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.025, 16, 32), cyanGlowMaterial);
    neckRing.position.y = 0.48;
    neckRing.rotation.x = Math.PI * 0.5;
    avatarGroup.add(neckRing);

    // 5. TORSO / HOODIE JACKET
    const torsoGeo = new THREE.CylinderGeometry(0.65, 0.9, 1.6, 32);
    const torsoMesh = new THREE.Mesh(torsoGeo, darkMetalMaterial);
    torsoMesh.position.y = -0.5;
    avatarGroup.add(torsoMesh);

    // Jacket Zipper & Neon Piping
    const zipperGeo = new THREE.BoxGeometry(0.04, 1.5, 0.05);
    const zipperMesh = new THREE.Mesh(zipperGeo, cyanGlowMaterial);
    zipperMesh.position.set(0, -0.5, 0.72);
    avatarGroup.add(zipperMesh);

    // Chest Arc Core
    const chestCoreGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const chestCoreMesh = new THREE.Mesh(chestCoreGeo, cyanGlowMaterial);
    chestCoreMesh.position.set(0, -0.2, 0.68);
    avatarGroup.add(chestCoreMesh);

    const chestRingGeo = new THREE.TorusGeometry(0.24, 0.02, 16, 32);
    const chestRingMesh = new THREE.Mesh(chestRingGeo, purpleGlowMaterial);
    chestRingMesh.position.set(0, -0.2, 0.68);
    avatarGroup.add(chestRingMesh);

    // 6. SHOULDERS
    const shoulderLeftGeo = new THREE.SphereGeometry(0.42, 24, 24);
    shoulderLeftGeo.scale(1.2, 0.9, 1.0);
    const shoulderLeft = new THREE.Mesh(shoulderLeftGeo, darkMetalMaterial);
    shoulderLeft.position.set(-1.0, -0.15, 0);
    avatarGroup.add(shoulderLeft);

    const shoulderRight = shoulderLeft.clone();
    shoulderRight.position.set(1.0, -0.15, 0);
    avatarGroup.add(shoulderRight);

    // Shoulder Neon Accent Lines
    const shoulderStripLeft = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.02, 16, 24, Math.PI), cyanGlowMaterial);
    shoulderStripLeft.position.set(-1.05, -0.1, 0);
    shoulderStripLeft.rotation.z = Math.PI * 0.25;
    avatarGroup.add(shoulderStripLeft);

    const shoulderStripRight = shoulderStripLeft.clone();
    shoulderStripRight.position.set(1.05, -0.1, 0);
    shoulderStripRight.rotation.z = -Math.PI * 0.25;
    avatarGroup.add(shoulderStripRight);

    // =========================================================================
    // ORBITAL TECH & FLOATING PARTICLES
    // =========================================================================
    const orbitalGroup = new THREE.Group();
    scene.add(orbitalGroup);

    // 1. Wireframe Tech Ring Orbiting
    const ringGeo = new THREE.TorusGeometry(2.3, 0.015, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.rotation.x = Math.PI * 0.45;
    orbitRing.rotation.y = Math.PI * 0.1;
    orbitalGroup.add(orbitRing);

    // 2. Floating Purple Octahedrons
    const octGeo = new THREE.OctahedronGeometry(0.22, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 1.8,
      wireframe: true
    });
    
    const oct1 = new THREE.Mesh(octGeo, octMat);
    oct1.position.set(-2.0, 1.6, 0.5);
    orbitalGroup.add(oct1);

    const oct2 = new THREE.Mesh(octGeo, octMat);
    oct2.position.set(2.2, -1.2, -0.4);
    orbitalGroup.add(oct2);

    // 3. Floating Cyan Code Particles
    const particleCount = 20;
    const particlesGroup = new THREE.Group();
    const cubeGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);

    for (let i = 0; i < particleCount; i++) {
      const pMat = (i % 2 === 0) ? cyanGlowMaterial : purpleGlowMaterial;
      const pMesh = new THREE.Mesh(cubeGeo, pMat);
      
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.2 + Math.random() * 0.8;
      pMesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 3.2,
        Math.sin(angle) * radius
      );
      particlesGroup.add(pMesh);
    }
    orbitalGroup.add(particlesGroup);

    // Soft Background Glow Aura
    const haloGeo = new THREE.CircleGeometry(3.2, 64);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.07,
      side: THREE.DoubleSide
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.set(0, 0, -2);
    scene.add(haloMesh);

    // =========================================================================
    // ANIMATION & INTERACTION LOOP
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -(((e.clientY - rect.top) / container.clientHeight) * 2 - 1);

      mouseX = x;
      mouseY = y;

      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.3;

      mouseLight.position.x = mouseX * 4;
      mouseLight.position.y = mouseY * 4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Scroll Handler for Smooth Avatar Transition
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeDist = window.innerHeight * 0.8;
      const progress = Math.min(scrollY / fadeDist, 1);

      avatarGroup.position.z = -progress * 2.5;
      avatarGroup.position.y = -progress * 1.5;
      renderer.domElement.style.opacity = (1 - progress * 0.85).toString();
    };
    window.addEventListener('scroll', handleScroll);

    // Clock & Render Loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Idle Breathing & Floating
      avatarGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.1;
      headMesh.rotation.z = Math.sin(elapsedTime * 1.2) * 0.03;

      // Smooth Lerp Mouse Tracking
      avatarGroup.rotation.y += (targetRotY - avatarGroup.rotation.y) * 0.06;
      avatarGroup.rotation.x += (targetRotX - avatarGroup.rotation.x) * 0.06;

      // Rotate Orbiting Tech Elements
      orbitalGroup.rotation.y = elapsedTime * 0.15;
      orbitRing.rotation.z = elapsedTime * 0.2;
      oct1.rotation.x = elapsedTime * 0.8;
      oct2.rotation.y = elapsedTime * 0.8;

      particlesGroup.children.forEach((p, idx) => {
        p.rotation.x += 0.02;
        p.rotation.y += 0.02;
        p.position.y += Math.sin(elapsedTime * 2 + idx) * 0.003;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Clean Up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries & Materials
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '480px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}
    />
  );
};

export default DeveloperAvatar3D;
