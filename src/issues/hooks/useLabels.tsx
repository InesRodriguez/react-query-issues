import { useQuery } from '@tanstack/react-query';
import { Label } from '../interfaces/label';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  // await sleep(2) /* sleep for 2 seconds */;
  const { data } = await githubApi.get('/labels');
  return data;
};
/**staleTime: 1000 * 60 * 60,  the data will be considered stale after 1 hour prevnet from refetching the data
    refetchOnWindowFocus: false, will prevent the data from refetching when the window is focused by default it is true**/
export const useLabels = () => {
  const labelsQuery = useQuery({ queryKey: ['labels'], queryFn: getLabels, staleTime: 1000 * 60 * 60 });
  return labelsQuery;
};
