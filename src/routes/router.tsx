import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import App from '~/App'
import Calendar from '~/pages/calendar/Calendar'
import AppContent from '~/containers/app-content/AppContent'
import { routes } from '~/routes/constants'
import { errorRoutes } from '~/routes/constants/errorRoutes'
import Events from '~/pages/events/Events'
import Faq from '~/pages/faq/Faq'
import Main from '~/pages/main/Main'

export const routerConfig = (
  <Route
    element={<App />}
    errorElement={<Navigate to={errorRoutes.badRequest.route} />}
    path={routes.main.route}
  >
    <Route element={<AppContent />}>
      <Route path={routes.main.route} element={<Main />} />
      <Route path={routes.events.route} element={<Events />} />
      <Route element={<Calendar />} index />
      <Route path={routes.faq.route} element={<Faq />} />
    </Route>
  </Route>
)

export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig),
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true
    }
  }
)
