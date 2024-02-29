import { useQuery } from '@tanstack/react-query';
import { Label } from '../interfaces/label';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2) /* sleep for 2 seconds */;
  const { data } = await githubApi.get('/labels');
  return data;
};
/**staleTime: 1000 * 60 * 60,  the data will be considered stale after 1 hour prevnet from refetching the data
    refetchOnWindowFocus: false, will prevent the data from refetching when the window is focused by default it is true
    initialData: [],  will provide initial data to the query
    placeholderData: [],  will provide placeholder data to the query while the data is being fetched
**/
export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    //initialData: [],
    placeholderData: [
      {
        id: 6344006318,
        node_id: 'LA_kwDOAJy2Ks8AAAABeiHarg',
        url: 'https://api.github.com/repos/facebook/react/labels/fb-exported',
        name: 'fb-exported',
        color: 'ededed',
        default: false,
        description: ''
      },
      {
        id: 717031390,
        node_id: 'MDU6TGFiZWw3MTcwMzEzOTA=',
        url: 'https://api.github.com/repos/facebook/react/labels/good%20first%20issue',
        name: 'good first issue',
        color: '6ce26a',
        default: true,
        description: ''
      }
    ]
  });
  return labelsQuery;
};
