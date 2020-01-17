import API from '../../../src/Api';
import { env } from '../../helpers';

const api = new API(env.ACCESS_TOKEN);

test('Should get productivity stats)', async () => {
  const response = await api.completed.get_stats();
  expect(response.days_items).toBeDefined();
  expect(response.week_items).toBeDefined();
  expect(response.karma_trend).toBeDefined();
  expect(response.karma_last_update).toBeDefined();
});

// 403 Forbidden, seems to be an "only premium" restriction
test('Should get all completed items)', async () => {
  const response = await api.completed.get_all();
  expect(response.items).toBeDefined();
  expect(response.projects).toBeDefined();
});