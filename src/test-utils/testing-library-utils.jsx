import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../context/OrderDetails";

const renderWithContext = (ui, options) => render(ui, { wrapper: OrderDetailsProvider, ...options }); // prettier-ignore

export * from "@testing-library/react";

export { renderWithContext as render };
