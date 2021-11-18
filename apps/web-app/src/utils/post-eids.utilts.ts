import { pluck, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

export function postEids(eids: string[]) {
  const url = "http://localhost:3500/";

  return ajax({
    url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { eids },
  }).pipe(pluck("response"), tap(console.dir));
}
