import { FC } from 'react';
import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { useLabels } from '../hooks/useLabels';

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {
  const labelsQuery = useLabels();
  /**
   * isLoading vs isFetching. Is loading considers the data in cache while isFetching is being refetched.
   */
  if (labelsQuery.isLoading) {
    return <LoadingIcon />;
  }
  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker  ${selectedLabels.includes(label.name) ? 'bg-primary' : ''}`}
          style={{ color: `#${label.color}`, border: `1px solid #${label.color}` }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
