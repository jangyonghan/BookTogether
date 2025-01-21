export function asyncHandler(handler) {
  // 이 async함수는 라우트에 들어가는 핸들러함수를 파라미터로 받아서 또다른 핸들러 함수를 리턴한다.
  return async function (req, res) {
    try {
      await handler(req, res); //원래 실행하는 함수를 이렇게 실행하고
    } catch (e) {
      if (e.name === "ValidationError") {
        res.status(400).send({ message: e.message });
      } else if (e.name === "CastError") {
        res.status(404).send({ message: "Cannot find given id." });
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}
