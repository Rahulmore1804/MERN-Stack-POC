import { Observable } from "rxjs";
import apiGwtData from "./api";

const obs = new Observable((observer) => {
  // observer.next(1);

  apiGwtData
    .get("/getauth")
    .then((res) => {
      observer.next(JSON.stringify(res.data));
    })
    .catch((e) => console.log("e", e));
});

export default obs;

