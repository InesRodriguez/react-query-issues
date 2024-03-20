import { Link, Navigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { useIssue } from '../hooks';
import { LoadingIcon } from '../../shared/components/LoadingIcon';

export const IssueView = () => {
  const params = useParams();
  const { id = '0' } = params;
  const { issueQUery, commentsQUery } = useIssue(+id);

  if (issueQUery.isLoading) return <LoadingIcon />;

  if (!issueQUery.data) return <Navigate to='/issues/list' />;

  return (
    <div className='row mb-5'>
      <div className='col-12 mb-3'>
        <Link to='./issues/list'>Go Back</Link>
      </div>
      {/** Primer comentario */}
      <IssueComment issue={issueQUery.data} />
      {/** Comentario de otros */}
      {commentsQUery.isLoading && <LoadingIcon />}
      {commentsQUery.data?.map((comment) => (
        <IssueComment key={comment.id} issue={comment} />
      ))}
    </div>
  );
};
