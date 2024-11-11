import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import App from '~/App'
import Calendar from '~/pages/calendar/Calendar'
import AppContent from '~/containers/app-content/AppContent'
import { routes } from '~/routes/constants'
import Events from '~/pages/events/Events'
import Faq from '~/pages/faq/Faq'
import Main from '~/pages/main/Main'

export const routerConfig = (
  <Route element={<App />} path={routes.main.route}>
    <Route element={<AppContent />}>
      <Route element={<Main />} index />
      <Route path={routes.events.route} element={<Events />} />
      <Route path={routes.calendar.route} element={<Calendar />} />
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
