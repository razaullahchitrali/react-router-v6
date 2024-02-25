import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
//   console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry,, Your devise will be crash.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}