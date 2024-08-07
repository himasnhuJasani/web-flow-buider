import Button from 'components/CustomButton';
import CsvFileSelectInput from 'components/Form/CsvInput';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { removeNode } from 'store/nodeSlice';
import { handleStyle } from './style';


const FileNode = ({ data }: any) => {
	const updateNodeInternals = useUpdateNodeInternals();
	const dispatch = useDispatch();

	const handleRemoveNode = () => {
		dispatch(removeNode(data.id));
	};

	useEffect(() => {
		updateNodeInternals(data.id);
	}, [data, updateNodeInternals]);

	return (
		<div className="bg-background border border-workflow-color">
			<div className="py-2 px-3 border-b border-border-color flex items-center justify-between">
				File <Button onClick={handleRemoveNode}>X</Button>
			</div>
			<div className="py-2 px-3 border-b border-border-color">
				<CsvFileSelectInput id={data.id} />
			</div>
			<Handle
				type="source"
				style={handleStyle}
				position={Position.Right}
				id="fileData"
			/>
		</div>
	);
};

export default FileNode;
