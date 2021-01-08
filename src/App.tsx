import React, { useState } from 'react';
import Select from 'react-select';
import Fretboard, { scaleNotes } from 'react-fretboard';
import CheckBox from 'react-animated-checkbox';
import styled from 'styled-components';

const basePath = process.env.NODE_ENV !== 'production' ? 'neck-visualizer/' : '';

const Main = styled.main`
	background-image: url(${basePath}static/images/cool.png);
	background-size: cover;
	display: grid;
	grid-gap: 1rem;
	grid-template-areas:
		'header header'
		'neck neck'
		'settings info';
`;

const Header = styled.div`
	grid-area: header;
	text-align: center;
	padding: 2rem;
`;

const Title = styled.span`
	border-radius: 2rem;
	padding: 1rem;
	font-size: 3rem;
	color: magenta;
	background-color: #fff;
	opacity: 0.5;
`;

const Neck = styled.div`
	grid-area: neck;
	margin: 0 2rem;
	padding: 2rem;
	background-color: #fff;
	opacity: 0.8;
	border-radius: 0.25rem;
`;

const Settings = styled.div`
	grid-area: settings;
	padding: 2rem;
	margin: 2rem 0 3rem 2rem;
	background-color: #fff;
	opacity: 0.8;
	border-radius: 0.25rem;
`;

const Info = styled.div`
	grid-area: info;
	padding: 2rem;
	margin: 2rem 2rem 3rem 0;
	background-color: #fff;
	opacity: 0.8;
	margin-top: 2rem;
	border-radius: 0.25rem;
	display: flex;
	flex-direction: columns;
`;

const InfoTitle = styled.div`
	font-size: 1.25rem;
`;

const Section = styled.div`
	margin-bottom: 2rem;
`;

const Label = styled.label`
	margin-left: 1rem;
`;

const Notes = styled.ul`
	list-style: none;
	border-left: 4px solid aliceblue;
`;

const Note = styled.li<{ color: string }>`
	&::before {
		content: '•';
		font-weight: bold;
		font-size: 2rem;
		margin-right: 1rem;
		color: ${props => props.color};
	}
`;

const ROOT_NOTES = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F'];
const TUNINGS = {
	STANDARD: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
	FOURTHS: ['E2', 'A2', 'D3', 'G3', 'C4', 'F4'],
};
const INTERVAL_LABELS = ['root', '2M', '3M', '4P', '5P', '6M', '7M'];

const STATUS_COLOR_MAP = {
	root: '#2196f3',
	'2M': '#FFB6C1',
	'3M': '#6ec6ff',
	'4P': '#32CD32',
	'5P': '#9a67ea',
	'6M': '#F08080',
	'7M': '#b9e59e',
};

type OptionType = {
	value: string;
	label: string;
};

function App() {
	const [rootNote, setRootNote] = useState<OptionType>();
	const [tuning, setTuning] = useState(getTuningOptions[0]);
	const [showNotes, setShowNotes] = useState<boolean>(true);
	const notes = rootNote?.value
		? scaleNotes(rootNote?.value, 'major').map((n: any) => n.note)
		: [];

	function getRootNoteOptions(): OptionType[] {
		return ROOT_NOTES.map(note => ({
			label: note,
			value: note,
		}));
	}

	function getTuningOptions(): OptionType[] {
		return [
			{ value: 'STANDARD', label: 'Standard' },
			{ value: 'FOURTHS', label: 'All fourths' },
		];
	}

	function getNeckNotes() {
		return [
			{ note: notes[0], status: 'root' },
			{ note: notes[1], status: '2M' },
			{ note: notes[2], status: '3M' },
			{ note: notes[3], status: '4P' },
			{ note: notes[4], status: '5P' },
			{ note: notes[5], status: '6M' },
			{ note: notes[6], status: '7M' },
		];
	}

	function handleChangeTuning(option) {
		setTuning(option);
	}

	function handleChangeRootNote(option) {
		setRootNote(option);
	}

	return (
		<Main>
			<Header>
				<Title>Guitar Neck Visualizer</Title>
			</Header>
			<Neck>
				<Fretboard
					skinType="strings"
					nrOfFrets={20}
					tuning={TUNINGS[tuning?.value]}
					showNotes={showNotes}
					selectedNotes={getNeckNotes()}
					theme={{ statusMap: STATUS_COLOR_MAP }}
				/>
			</Neck>
			<Settings>
				<Section>
					<label>Tuning</label>
					<Select
						id="tuning"
						value={tuning}
						placeholder="Standard tuning by default"
						onChange={handleChangeTuning}
						options={getTuningOptions()}
					/>
				</Section>
				<Section>
					<label>Root note</label>
					<Select
						id="rootNote"
						value={rootNote}
						placeholder="Select a root note"
						onChange={handleChangeRootNote}
						options={getRootNoteOptions()}
					/>
				</Section>
				<Section>
					<CheckBox
						checked={showNotes}
						checkBoxStyle={{
							checkedColor: '#b5cbbb',
							size: 25,
							unCheckedColor: '#b8b8b8',
						}}
						duration={400}
						onClick={() => setShowNotes(!showNotes)}
					/>
					<Label>Show notes</Label>
				</Section>
			</Settings>
			<Info>
				<Section style={{ width: '24rem' }}>
					<InfoTitle>Major scale:</InfoTitle>
					<Notes>
						{notes.map((note: string, index: number) => (
							<Note color={STATUS_COLOR_MAP[INTERVAL_LABELS[index]]}>
								{INTERVAL_LABELS[index]}: {note}
							</Note>
						))}
					</Notes>
				</Section>

				<Section style={{ width: '2rem' }}>
					<img
						alt="circle-of-fifths"
						src={`${basePath}static/images/circle-of-fifths.jpg`}
					/>
				</Section>
			</Info>
		</Main>
	);
}

export default App;
