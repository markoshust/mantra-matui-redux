import { useDeps, composeAll, compose } from 'mantra-core';
import Login from '../components/Login';

const onPropsChange = (context, onData) => {
  onData(null, {});
};

const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  compose(onPropsChange),
  useDeps(depsMapper),
)(Login);
