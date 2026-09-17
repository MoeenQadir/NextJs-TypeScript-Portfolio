"use client";

import { useEffect, useRef, type ReactNode, type ComponentProps } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    Float,
    Stars,
    Sparkles,
    MeshDistortMaterial,
    AdaptiveDpr,
} from "@react-three/drei";
import * as THREE from "three";

type FloatProps = ComponentProps<typeof Float>;

function Rig({ children }: { children?: ReactNode }) {
    const { camera } = useThree();
    const pointer = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onMove = (e: PointerEvent) => {
            pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    useFrame((_, delta) => {
        const x = pointer.current.x * 0.5;
        const y = pointer.current.y * 0.35;
        camera.position.x = THREE.MathUtils.damp(camera.position.x, x, 2.5, delta);
        camera.position.y = THREE.MathUtils.damp(camera.position.y, y, 2.5, delta);
        camera.lookAt(0, 0, 0);
    });

    return <group>{children}</group>;
}

function GoldKnot() {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.elapsedTime;
        mesh.current.rotation.x = t * 0.18;
        mesh.current.rotation.y = t * 0.25;
    });
    return (
        <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.6}>
            <mesh ref={mesh} position={[3.4, 0.9, -1]} scale={0.62}>
                <torusKnotGeometry args={[1, 0.32, 160, 24]} />
                <meshStandardMaterial
                    color="#ffb900"
                    wireframe
                    transparent
                    opacity={0.85}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>
        </Float>
    );
}

function VioletIcosahedron(props: FloatProps) {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.elapsedTime;
        mesh.current.rotation.x = t * 0.22;
        mesh.current.rotation.z = t * 0.16;
    });
    return (
        <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.2} {...props}>
            <mesh ref={mesh} position={[-3.6, 1.4, -1.5]} scale={0.85}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color="#8b5cf6"
                    wireframe
                    transparent
                    opacity={0.55}
                    distort={0.28}
                    speed={1.6}
                    metalness={0.7}
                    roughness={0.3}
                />
            </mesh>
        </Float>
    );
}

function CyanTorus(props: FloatProps) {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.elapsedTime;
        mesh.current.rotation.y = t * 0.4;
        mesh.current.rotation.x = t * 0.3;
    });
    return (
        <Float speed={1.8} rotationIntensity={0.5} floatIntensity={2} {...props}>
            <mesh ref={mesh} position={[2.6, -1.8, -1]} scale={0.8}>
                <torusGeometry args={[1, 0.32, 32, 64]} />
                <meshStandardMaterial
                    color="#38bdf8"
                    wireframe
                    transparent
                    opacity={0.8}
                    metalness={0.6}
                    roughness={0.25}
                />
            </mesh>
        </Float>
    );
}

function EmeraldBox(props: FloatProps) {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.elapsedTime;
        mesh.current.rotation.x = t * 0.26;
        mesh.current.rotation.y = t * 0.32;
    });
    return (
        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.4} {...props}>
            <mesh ref={mesh} position={[-2.4, -1.7, -0.6]} scale={0.55}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color="#10b981"
                    wireframe
                    transparent
                    opacity={0.7}
                    metalness={0.7}
                    roughness={0.3}
                />
            </mesh>
        </Float>
    );
}

function GlowSpheres() {
    const positions: Array<[number, number, number, number, string]> = [
        [5.4, 0.3, -2.8, 0.42, "#ffb900"],
        [6.4, 2.7, -3.8, 0.36, "#38bdf8"],
        [0.3, 3.1, -3.6, 0.45, "#8b5cf6"],
        [-0.6, -3.0, -4.2, 0.4, "#10b981"],
    ];
    return (
        <>
            {positions.map(([x, y, z, r, color], i) => (
                <Float key={i} speed={2} rotationIntensity={0.2} floatIntensity={2}>
                    <mesh position={[x, y, z]}>
                        <sphereGeometry args={[r, 24, 24]} />
                        <meshStandardMaterial
                            color={color}
                            emissive={color}
                            emissiveIntensity={0.55}
                            metalness={0.4}
                            roughness={0.3}
                        />
                    </mesh>
                </Float>
            ))}
        </>
    );
}

export default function HeroScene() {
    return (
        <Canvas
            dpr={[1, 1.6]}
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ alpha: true, antialias: true }}
            style={{ width: "100%", height: "100%" }}
            className="pointer-events-none"
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 6]} intensity={1.1} color="#ffffff" />
            <pointLight position={[-5, 2, 4]} intensity={1.4} color="#38bdf8" />
            <pointLight position={[4, -3, 3]} intensity={1.2} color="#ffb900" />
            <Rig>
                <GoldKnot />
                <VioletIcosahedron />
                <CyanTorus />
                <EmeraldBox />
                <GlowSpheres />
            </Rig>
            <Stars radius={55} depth={40} count={2400} factor={3.4} saturation={0} fade speed={1.1} />
            <Sparkles
                count={70}
                scale={[14, 8, 6]}
                size={2.4}
                speed={0.35}
                color="#ffd166"
                opacity={0.7}
            />
            <AdaptiveDpr pixelated />
        </Canvas>
    );
}