import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Text, Float } from "@react-three/drei";
import * as THREE from "three";

// Simulated real-time data
const useSimulatedData = () => {
  const [data, setData] = useState({
    temperature: 42.3,
    vibration: 0.8,
    rpm: 1450,
    power: 85,
    status: "정상",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        temperature: 40 + Math.random() * 8,
        vibration: 0.5 + Math.random() * 0.8,
        rpm: 1400 + Math.random() * 100,
        power: 80 + Math.random() * 15,
        status: Math.random() > 0.95 ? "주의" : "정상",
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return data;
};

// Machine base component
const MachineBase = ({ isDigital = false }: { isDigital?: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group>
      {/* Main body */}
      <RoundedBox
        args={[2, 1.2, 1.5]}
        radius={0.05}
        position={[0, 0.6, 0]}
        ref={meshRef}
      >
        <meshStandardMaterial
          color={isDigital ? "#1e88e5" : "#64748b"}
          transparent={isDigital}
          opacity={isDigital ? 0.4 : 1}
          wireframe={isDigital}
        />
      </RoundedBox>

      {/* Control panel */}
      <RoundedBox args={[0.8, 0.5, 0.1]} radius={0.02} position={[0, 1.0, 0.8]}>
        <meshStandardMaterial
          color={isDigital ? "#42a5f5" : "#334155"}
          transparent={isDigital}
          opacity={isDigital ? 0.5 : 1}
          wireframe={isDigital}
        />
      </RoundedBox>

      {/* Motor housing */}
      <mesh position={[-0.6, 0.9, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.6, 16]} />
        <meshStandardMaterial
          color={isDigital ? "#1976d2" : "#475569"}
          transparent={isDigital}
          opacity={isDigital ? 0.4 : 1}
          wireframe={isDigital}
        />
      </mesh>

      {/* Base plate */}
      <RoundedBox args={[2.4, 0.1, 1.8]} radius={0.02} position={[0, 0, 0]}>
        <meshStandardMaterial
          color={isDigital ? "#0d47a1" : "#1e293b"}
          transparent={isDigital}
          opacity={isDigital ? 0.3 : 1}
          wireframe={isDigital}
        />
      </RoundedBox>
    </group>
  );
};

// Rotating component (shaft/spindle)
const RotatingShaft = ({ isDigital = false }: { isDigital?: boolean }) => {
  const shaftRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (shaftRef.current) {
      shaftRef.current.rotation.x += 0.05;
    }
  });

  return (
    <mesh ref={shaftRef} position={[0.7, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.08, 0.08, 1.2, 12]} />
      <meshStandardMaterial
        color={isDigital ? "#64b5f6" : "#94a3b8"}
        transparent={isDigital}
        opacity={isDigital ? 0.6 : 1}
        wireframe={isDigital}
      />
    </mesh>
  );
};

// Data indicator floating panel
const DataPanel = ({ 
  position, 
  label, 
  value, 
  unit, 
  status = "normal" 
}: { 
  position: [number, number, number];
  label: string;
  value: string;
  unit: string;
  status?: "normal" | "warning";
}) => {
  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3}>
      <group position={position}>
        {/* Panel background */}
        <mesh>
          <planeGeometry args={[0.8, 0.4]} />
          <meshBasicMaterial 
            color={status === "warning" ? "#ff9800" : "#1565c0"} 
            transparent 
            opacity={0.85} 
          />
        </mesh>
        
        {/* Label */}
        <Text
          position={[0, 0.1, 0.01]}
          fontSize={0.06}
          color="#90caf9"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
        
        {/* Value */}
        <Text
          position={[0, -0.05, 0.01]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {value}{unit}
        </Text>

        {/* Connection line */}
        <line>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, -0.2, 0, 0, -0.5, -0.3])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#42a5f5" transparent opacity={0.5} />
        </line>
      </group>
    </Float>
  );
};

// Status indicator
const StatusIndicator = ({ status }: { status: string }) => {
  const color = status === "정상" ? "#4caf50" : "#ff9800";
  
  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.2}>
      <group position={[0, 2.2, 0]}>
        <mesh>
          <planeGeometry args={[1.2, 0.35]} />
          <meshBasicMaterial color="#0d47a1" transparent opacity={0.9} />
        </mesh>
        
        {/* Status dot */}
        <mesh position={[-0.4, 0, 0.01]}>
          <circleGeometry args={[0.06, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
        
        <Text
          position={[0.1, 0, 0.01]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          시스템 상태: {status}
        </Text>
      </group>
    </Float>
  );
};

// Grid floor
const GridFloor = () => {
  return (
    <group position={[0, -0.05, 0]}>
      <gridHelper args={[10, 20, "#1e3a5f", "#0f2744"]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#0a1929" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

// Main scene
const Scene = () => {
  const data = useSimulatedData();

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <directionalLight position={[-3, 3, -3]} intensity={0.3} color="#64b5f6" />
      <pointLight position={[0, 3, 0]} intensity={0.5} color="#1e88e5" />

      {/* Physical machine (left) */}
      <group position={[-1.8, 0, 0]}>
        <MachineBase isDigital={false} />
        <RotatingShaft isDigital={false} />
      </group>

      {/* Digital twin (right) */}
      <group position={[1.8, 0, 0]}>
        <MachineBase isDigital={true} />
        <RotatingShaft isDigital={true} />
        
        {/* Data overlays for digital twin */}
        <DataPanel
          position={[0.8, 1.8, 0.5]}
          label="온도"
          value={data.temperature.toFixed(1)}
          unit="°C"
          status={data.temperature > 45 ? "warning" : "normal"}
        />
        <DataPanel
          position={[-0.8, 1.6, 0.5]}
          label="진동"
          value={data.vibration.toFixed(2)}
          unit="mm/s"
          status={data.vibration > 1.0 ? "warning" : "normal"}
        />
        <DataPanel
          position={[0, 1.4, 1]}
          label="회전수"
          value={Math.round(data.rpm).toString()}
          unit="RPM"
        />
      </group>

      {/* Status indicator */}
      <StatusIndicator status={data.status} />

      {/* Labels */}
      <Text
        position={[-1.8, -0.3, 1.2]}
        fontSize={0.15}
        color="#94a3b8"
        anchorX="center"
      >
        물리적 설비
      </Text>
      <Text
        position={[1.8, -0.3, 1.2]}
        fontSize={0.15}
        color="#42a5f5"
        anchorX="center"
      >
        디지털 트윈
      </Text>

      {/* Connection visualization between physical and digital */}
      <group position={[0, 0.6, 0]}>
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[-0.6 + i * 0.3, 0, 0]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#42a5f5" transparent opacity={0.6} />
          </mesh>
        ))}
      </group>

      {/* Floor grid */}
      <GridFloor />

      {/* Camera controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={4}
        maxDistance={10}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

// Loading fallback
const LoadingFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-navy">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-industrial/30 border-t-industrial rounded-full animate-spin mx-auto mb-4" />
      <p className="text-primary-foreground/70 text-sm">시각화 로딩 중...</p>
    </div>
  </div>
);

// Main component
const DigitalTwinVisualization = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingFallback />;
  }

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] bg-gradient-to-b from-[#0a1929] to-[#0d2137] rounded-2xl overflow-hidden">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [5, 3, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </Suspense>

      {/* Info overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
        <div className="bg-navy/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-industrial/20">
          <p className="text-xs text-industrial-light">실시간 동기화</p>
          <p className="text-sm text-primary-foreground font-medium">2초 주기 업데이트</p>
        </div>
        <div className="bg-navy/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-industrial/20">
          <p className="text-xs text-industrial-light">데이터 포인트</p>
          <p className="text-sm text-primary-foreground font-medium">온도, 진동, RPM</p>
        </div>
        <div className="bg-navy/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-industrial/20">
          <p className="text-xs text-industrial-light">드래그하여 회전</p>
          <p className="text-sm text-primary-foreground font-medium">3D 인터랙션</p>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-sm rounded-lg p-3 border border-industrial/20">
        <p className="text-xs text-primary-foreground/60 mb-2">상태 표시</p>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-primary-foreground">정상</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500" />
          <span className="text-xs text-primary-foreground">주의</span>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinVisualization;
