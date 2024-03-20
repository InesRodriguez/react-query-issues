import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Issue } from '../interfaces';
import { sleep } from '../../helpers/sleep';

export const useIssue = (issueNumber: Number) => {
  const getIssue = async (issueNumber: Number): Promise<Issue> => {
   await sleep(2); // Simulate a slow network
    const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
    return data;
  };
  const getIssueComments = async (issueNumber: Number): Promise<Issue[]> => {
    await sleep(2); // Simulate a slow network
     const { data } = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`);
     return data;
   };

  const issueQUery = useQuery({ queryKey: ['issue'], queryFn: () => getIssue(issueNumber) });
  const commentsQUery = useQuery({ queryKey: ['issue','comments'], queryFn: () => getIssueComments(issueQUery?.data!.number), enabled:!! issueQUery.data });

  return {issueQUery,commentsQUery};
};
