import React, { useEffect, useRef } from 'react';
import { IAnimationProps } from '../Interfaces/IProps';
import * as THREE from 'three';

const Animation: React.FC<IAnimationProps> = () => {
    const animationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set up scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1f1f1f);

        // Set up camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Set up renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth * 0.2, window.innerHeight * 0.2);
        animationRef.current?.appendChild(renderer.domElement);

        // Set up torus (donut) geometry
        const geometry = new THREE.TorusGeometry(2, 1, 16, 100);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        // Set up animation
        const rotateSpeed = 0.02;

        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate torus (donut)
            torus.rotation.x += rotateSpeed;
            torus.rotation.y += rotateSpeed;

            // Render scene
            renderer.render(scene, camera);
        };

        // Start animation
        animate();
        // Handle window resize
        window.onresize = function () {
            camera.aspect = (window.innerWidth / window.innerHeight) * 0.2;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth * 0.2, window.innerHeight * 0.2);
        };

        // Clean up on component unmount
        return () => {};
    },[] );

    return (
        <div className="AnimationContainer">
            <div
                ref={animationRef}
            />
        </div>
    );
};

export default Animation;