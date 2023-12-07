import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { button } from "leva";

const Scene = () => {
  const gl = useThree((state) => state.gl);
  useControls({
    Export: button(() => {
      const link = document.createElement("a");
      link.setAttribute("download", "canvas.png");
      link.setAttribute(
        "href",
        gl.domElement
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
      );
      link.click();
    }),
  });
};
export default Scene;
