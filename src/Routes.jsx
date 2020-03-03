import RegistrationContainer from "./containers/RegistrationContainer/RegistrationContainer";

export const Routes = [
  {
    isNavBar: true,
    isExact: true,
    path: "/",
    name: "Registration",
    component: RegistrationContainer
  },
  {
    isNavBar: true,
    isExact: true,
    path: "/registration",
    name: "Registration",
    component: RegistrationContainer
  },
];

export default Routes;
