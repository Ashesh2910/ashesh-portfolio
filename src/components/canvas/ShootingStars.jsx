import React, { useState, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ShootingStar = () => {
    const ref = useRef();

    // Random start position calculated once
    const startPos = useMemo(() => {
        const pos = new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        return pos;
    }, []);

    useFrame((state) => {
        if (!ref.current) return;

        // Move the star
        ref.current.position.x -= 0.1;
        ref.current.position.y -= 0.1;

        // Reset if out of bounds
        if (ref.current.position.x < -10 || ref.current.position.y < -10) {
            ref.current.position.set(
                (Math.random() * 5) + 5,
                (Math.random() * 5) + 5,
                (Math.random() - 0.5) * 5
            );
        }
    });

    return (
        <mesh ref={ref} position={startPos} rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.01, 0.01, 1, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
    );
};

const ShootingStars = () => {
    return (
        <group>
            {[...Array(5)].map((_, i) => (
                <ShootingStar key={i} />
            ))}
        </group>
    );
};

export default ShootingStars;
