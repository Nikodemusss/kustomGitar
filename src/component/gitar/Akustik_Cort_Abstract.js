/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/Akustik_Cort_Abstract.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { UseCustomization } from "../context/ColorContext";
import { UseTexture } from "../context/TextureContext";
import { useRef, useEffect } from "react";
import { TextureLoader } from "three";

export function Akustik_Cort({ props }) {
  const { nodes } = useGLTF("/Akustik_Cort_Abstract.glb");
  const { Tuner, Neck, Nut, Fret, FretBoard, Body, Bridge, BridgeNut } =
    UseCustomization();
  const bridgenut = useRef();
  const fret = useRef();
  const bridge = useRef();
  const nut = useRef();
  const body = useRef();
  const neck = useRef();
  const tuner = useRef();
  const fretboard = useRef();
  const materials = useRef();
  const {
    TunerTxt,
    FretTxt,
    FretBoardTxt,
    NeckTxt,
    NutTxt,
    BodyTxt,
    BridgeTxt,
    BridgeNutTxt,
  } = UseTexture();

  useEffect(() => {
    const loadTexture = async () => {
      if (TunerTxt) {
        try {
          const textureLoader = new TextureLoader();
          const texture = await textureLoader.loadAsync(TunerTxt);
          tuner.current.map = texture;
          tuner.current.needsUpdate = true;
        } catch (error) {}
      }
    };
    loadTexture();
  }, [TunerTxt]);

  useEffect(() => {
    const loadTexture = async () => {
      if (NeckTxt) {
        try {
          const textureLoader = new TextureLoader();
          const texture = await textureLoader.loadAsync(NeckTxt);
          neck.current.map = texture;
          neck.current.needsUpdate = true;
        } catch {}
      }
    };
    loadTexture();
  }, [NeckTxt]);

  useEffect(() => {
    const loadTexture = async () => {
      if (BodyTxt) {
        try {
          const textureLoader = new TextureLoader();
          const texture = await textureLoader.loadAsync(BodyTxt);
          body.current.map = texture;
          body.current.needsUpdate = true;
        } catch {}
      }
    };
    loadTexture();
  }, [BodyTxt]);

  useEffect(() => {
    const loadTexture = async () => {
      if (FretBoardTxt) {
        try {
          const textureLoader = new TextureLoader();
          const texture = await textureLoader.loadAsync(FretBoardTxt);
          fretboard.current.map = texture;
          fretboard.current.needsUpdate = true;
        } catch {}
      }
    };
    loadTexture();
  }, [FretBoardTxt]);

  useEffect(() => {
    const loadTexture = async () => {
      if (FretTxt) {
        try {
          const textureLoader = new TextureLoader();
          const texture = await textureLoader.loadAsync(FretTxt);
          fret.current.map = texture;
          fret.current.needsUpdate = true;
        } catch (error) {}
      }
    };
    loadTexture();
  }, [FretTxt]);

  useEffect(() => {
    const loadTexture = async () => {
      if (NutTxt) {
        try {
          const textureLoader = new TextureLoader();
          const texture = await textureLoader.loadAsync(NutTxt);
          nut.current.map = texture;
          nut.current.needsUpdate = true;
        } catch {}
      }
    };
    loadTexture();
  }, [NutTxt]);

  useEffect(() => {
    const loadTexture = async () => {
      if (BridgeNutTxt) {
        try {
          const textureLoader = new TextureLoader();
          const texture = await textureLoader.loadAsync(BridgeNutTxt);
          bridgenut.current.map = texture;
          bridgenut.current.needsUpdate = true;
        } catch {}
      }
    };
    loadTexture();
  }, [BridgeNutTxt]);

  useEffect(() => {
    const loadTexture = async () => {
      if (BridgeTxt) {
        try {
          const textureLoader = new TextureLoader();
          const texture = await textureLoader.loadAsync(BridgeTxt);
          bridge.current.map = texture;
          bridge.current.needsUpdate = true;
        } catch {}
      }
    };
    loadTexture();
  }, [BridgeTxt]);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Body.geometry}
        material={materials.Body}
        position={[-0.014, -0.784, 0.431]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial {...props} color={Body.color} ref={body} />
      </mesh>
      <mesh
        geometry={nodes.Neck.geometry}
        material={materials.Neck}
        position={[0.042, 0.432, -0.19]}
      >
        <meshStandardMaterial {...props} color={Neck.color} ref={neck} />
      </mesh>
      <mesh
        geometry={nodes.Bridge.geometry}
        material={materials.Bridge}
        position={[0.086, -1.536, -0.19]}
      >
        <meshStandardMaterial {...props} color={Bridge.color} ref={bridge} />
      </mesh>
      <mesh
        geometry={nodes.FretBoard.geometry}
        material={materials.FretBoard}
        position={[0.071, 1.464, -0.452]}
      >
        <meshStandardMaterial
          {...props}
          color={FretBoard.color}
          ref={fretboard}
        />
      </mesh>
      <mesh
        geometry={nodes.Nut.geometry}
        material={materials.Nut}
        position={[0.1, 1.886, -0.033]}
      >
        <meshStandardMaterial {...props} color={Nut.color} ref={nut} />
      </mesh>
      <mesh
        geometry={nodes.Fret.geometry}
        material={nodes.Fret.material}
        position={[0.557, 0.119, 0.277]}
      >
        <meshStandardMaterial {...props} color={Fret.color} ref={fret} />
      </mesh>
      <mesh
        geometry={nodes.Tuner.geometry}
        material={materials.Tuner}
        position={[-0.373, 1.878, 0.755]}
      >
        <meshStandardMaterial {...props} color={Tuner.color} ref={tuner} />
      </mesh>
      <mesh
        geometry={nodes.BridgeNut.geometry}
        material={materials.BridgeNut}
        position={[-2.062, -1.324, 0.113]}
      >
        <meshStandardMaterial
          {...props}
          color={BridgeNut.color}
          ref={bridgenut}
        />
      </mesh>
    </group>
  );
}

export default Akustik_Cort;
useGLTF.preload("/Akustik_Cort_Abstract.glb");
