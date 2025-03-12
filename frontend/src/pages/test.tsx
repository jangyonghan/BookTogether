import { useState } from "react";
import Snackbar2 from "../components/ui/snackBar";

export default function test() {
  const [isSnackbar, setIsSnackbar] = useState(false);

  const toggleSnackbar = () => {
    setIsSnackbar((prev) => !prev);
  };

  return (
    <>
      <div>
        <button onClick={toggleSnackbar}>스낵바 오픈!!</button>
        {isSnackbar && (
          <Snackbar2
            message={
              <>
                <div>완료완료</div>
              </>
            }
            isOpen={isSnackbar}
            onClose={toggleSnackbar}
          />
        )}
      </div>
    </>
  );
}
