import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { RootState } from "../../app/store";
import { getPanels } from "./panelAPI";
import { PanelModel } from "../../models/panel";
import { motion } from "framer-motion";

export const Panel: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPanels());
  }, [dispatch]);

  const panelList = useSelector((state: RootState) => state.panel.list.values);

  console.log(panelList);

  const [panels, setPanels] = useState<PanelModel>([] as any);

  return (
    <div className="columns-3 space-y-3">
      {panelList?.map((panel: PanelModel, index: number) => {
        return (
          <div key={panel._id}>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
            >
              <h1>{panel.title}</h1>
              <img src={panel.image} alt="image" />
            </motion.button>
          </div>
        );
      })}
    </div>
  );
};
