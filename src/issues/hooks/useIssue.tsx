import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Issue } from '../interfaces';
import { sleep } from '../../helpers/sleep';

export const useIssue = (issueNumber: Number) => {
  const getIssue = async (issueNumber: Number): Promise<Issue> => {
    sleep(2);
    const { data } = await githubApi.get(`/issues/${issueNumber}`);
    return data;
  };

  const issueQUery = useQuery({ queryKey: ['issue'], queryFn: () => getIssue(issueNumber) });

  return {issueQUery};
};
