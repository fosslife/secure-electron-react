import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "I18n/i18n.config";
import { I18nextProvider } from "react-i18next";
import Root from "Core/root";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="loading">
      <Root history={history}></Root>
    </Suspense>
  </I18nextProvider>,
  document.getElementById("target")
);
