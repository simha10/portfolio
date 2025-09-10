import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Environment } from '@react-three/drei';
// postprocessing removed for compatibility

function FloatingShapes() {
    const groupRef = useRef();
    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();
        groupRef.current.rotation.x = Math.sin(t / 4) / 8;
        groupRef.current.rotation.y = Math.cos(t / 3) / 8;
    });
    return (
        <group ref={groupRef}>
            <Float speed={1.2} rotationIntensity={1} floatIntensity={1.5}>
                <mesh position={[-2, 0.5, -4]}>
                    <torusKnotGeometry args={[0.6, 0.18, 200, 32]} />
                    <meshStandardMaterial color="#7c3aed" metalness={0.4} roughness={0.2} />
                </mesh>
            </Float>
            <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
                <mesh position={[2.2, -0.2, -3]}>
                    <icosahedronGeometry args={[0.9, 0]} />
                    <meshStandardMaterial color="#60a5fa" metalness={0.3} roughness={0.3} />
                </mesh>
            </Float>
            <Float speed={0.9} rotationIntensity={0.6} floatIntensity={0.9}>
                <mesh position={[0, 1.6, -5]}>
                    <dodecahedronGeometry args={[0.7, 0]} />
                    <meshStandardMaterial color="#22d3ee" metalness={0.25} roughness={0.35} />
                </mesh>
            </Float>
        </group>
    );
}

function Particles() {
    const count = 800;
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            arr[i3 + 0] = (Math.random() - 0.5) * 20;
            arr[i3 + 1] = (Math.random() - 0.5) * 12;
            arr[i3 + 2] = -Math.random() * 12 - 2;
        }
        return arr;
    }, [count]);
    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.02} color="#93c5fd" sizeAttenuation depthWrite={false} />
        </points>
    );
}

const Background3D = () => {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <color attach="background" args={["#0b1020"]} />
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 3, 2]} intensity={1.2} />
                <Suspense fallback={null}>
                    <Environment preset="studio" blur={0.6} />
                    <Particles />
                    <FloatingShapes />
                </Suspense>
                {/* Effects removed for compatibility */}
            </Canvas>
        </div>
    );
};

export default Background3D;


