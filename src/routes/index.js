import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from 'components/Shared';
import { HelmetProvider } from 'react-helmet-async';
import i18next from 'i18next';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Faq = lazy(() => import('../pages/Faq'));
const Doctor = lazy(() => import('../pages/Doctor'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

const Router = function Router() {
  const lngFromPath = window.location.pathname.split('/')?.[0];
  const supportedLanguages = i18next.languages;
  const isLang = supportedLanguages.includes(lngFromPath);
  const [lng, setLng] = useState(isLang ? lngFromPath : process.env.REACT_APP_DEFAULT_LANGUAGE);

  useEffect(() => {
    setLng(isLang ? lngFromPath : process.env.REACT_APP_DEFAULT_LANGUAGE);
  }, [isLang, lngFromPath]);

  useEffect(() => {
    if (i18next.language !== lng) {
      i18next.changeLanguage(lng);
    }
  }, [lng]);

  // TODO: unify routes names, some are in English (e.g. '/about'), others in Slovenian (/zdravnik, /zobozdravnik, /ginekolog)
  return (
    <HelmetProvider>
      <Routes>
        <Route exact path="/" element={<Navigate to={`/${lng}/`} />} />
        <Route exact path="/faq" element={<Navigate to={`/${lng}/faq`} />} />
        <Route exact path="/about" element={<Navigate to={`/${lng}/about`} />} />
        <Route
          exact
          path="/:lng"
          element={
            isLang ? (
              <Suspense fallback={<Loader.Center />}>
                <Home />
              </Suspense>
            ) : (
              <Navigate to={`/${lng}/404`} />
            )
          }
        />
        <Route
          exact
          path="/:lng/about"
          element={
            <Suspense fallback={<Loader.Center />}>
              <About />
            </Suspense>
          }
        />
        <Route
          exact
          path="/:lng/faq"
          element={
            <Suspense fallback={<Loader.Center />}>
              <Faq />
            </Suspense>
          }
        />
        <Route
          path="/:lng/zdravnik/:priimekIme"
          element={
            <Suspense fallback={<Loader.Center />}>
              <Doctor />
            </Suspense>
          }
        />
        <Route
          path="/:lng/zobozdravnik/:priimekIme"
          element={
            <Suspense fallback={<Loader.Center />}>
              <Doctor />
            </Suspense>
          }
        />
        <Route
          path="/:lng/ginekolog/:priimekIme"
          element={
            <Suspense fallback={<Loader.Center />}>
              <Doctor />
            </Suspense>
          }
        />
        <Route
          path="/:lng/zdravnik/:priimekIme/edit"
          element={
            <Suspense fallback={<Loader.Center />}>
              <Doctor isReportError />
            </Suspense>
          }
        />
        <Route
          path="/:lng/zobozdravnik/:priimekIme/edit"
          element={
            <Suspense fallback={<Loader.Center />}>
              <Doctor isReportError />
            </Suspense>
          }
        />
        <Route
          path="/:lng/ginekolog/:priimekIme/edit"
          element={
            <Suspense fallback={<Loader.Center />}>
              <Doctor isReportError />
            </Suspense>
          }
        />
        <Route
          path="/:lng/404"
          element={
            <Suspense fallback={<Loader.Center />}>
              <PageNotFound />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader.Center />}>
              <Navigate to={`/${lng}/404`} />
            </Suspense>
          }
        />
      </Routes>
    </HelmetProvider>
  );
};

export default Router;
