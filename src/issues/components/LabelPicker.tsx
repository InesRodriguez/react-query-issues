import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { useLabels } from '../hooks/useLabels';

export const LabelPicker = () => {
  const labelsQuery = useLabels();
/**
 * isLoading vs isFetching. Is loading considers the data in cache while isFetching is being refetched.
 */
  if (labelsQuery.isLoading) {
    return (<LoadingIcon />);
  }
  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className='badge rounded-pill m-1 label-picker'
          style={{ color: `#${label.color}`, border: `1px solid #${label.color}`,}}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
