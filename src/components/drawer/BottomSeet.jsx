import { motion, AnimatePresence } from "motion/react";

function BottomSeet({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-[62px] bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-[62px] left-0 w-full  bg-white rounded-t-3xl z-50 p-5"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0.2 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 100 }}
            onDragEnd={(event, info) => {
              if (info.offset.y > 50) onClose();
            }}
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default BottomSeet;
