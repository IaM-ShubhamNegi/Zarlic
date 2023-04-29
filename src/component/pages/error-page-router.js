import { useRouteError } from "react-router-dom";

const mystyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontWeight: "800",
  fontSize: "2rem"

};

export function ErrorOccur() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error_page" style={mystyle}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export function ErrorPage() {
  return (
    <div id="error_page" style={mystyle}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
