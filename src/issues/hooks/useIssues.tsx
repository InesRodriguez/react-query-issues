import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Issue } from '../interfaces/issue';

const getIssues = async (): Promise<Issue[]> => {
  const { data } = await githubApi.get('/issues');
  return data;
};

export const useIssues = () => {
  const issuesQUery = useQuery({ queryKey: ['issues'], queryFn: getIssues, staleTime: 1000 * 60 * 60 });
  return { issuesQUery };
};
