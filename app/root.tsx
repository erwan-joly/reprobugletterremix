import {
  Links,
  Meta,
} from "remix";
import { Letter } from "react-letter";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <Letter html={"html"} text={"text"} />
      </body>
    </html>
  );
}
