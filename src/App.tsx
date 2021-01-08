import React, { useState } from 'react';
import Select from 'react-select';
import Fretboard, { scaleNotes } from 'react-fretboard';
import CheckBox from 'react-animated-checkbox';
import styled from 'styled-components';

const basePath = process.env.NODE_ENV === 'development' ? 'neck-visualizer/' : '';

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

const SCALE_STATUS_MAP = {
	major: ['root', '2M', '3M', '4P', '5P', '6M', '7M'],
	'harmonic minor': ['root', '2M', '3m', '4P', '5P', '6m', '7M'],
	'melodic minor': ['root', '2M', '3m', '4P', '5P', '6M', '7M'],
	augmented: ['root'],
	diminished: ['root'],
};

const STATUS_COLOR_MAP = {
	root: '#2196f3',
	'2M': '#FFB6C1',
	'3m': 'yellow',
	'3M': '#6ec6ff',
	'4P': '#32CD32',
	'5P': '#9a67ea',
	'6M': '#F08080',
	'7m': 'red',
	'7M': '#b9e59e',
};

type OptionType = {
	value: string;
	label: string;
};

function App() {
	const [rootNote, setRootNote] = useState<OptionType>();
	const [tuning, setTuning] = useState(getTuningOptions()[0]);
	const [scale, setScale] = useState(getScaleOptions()[0]);
	const [showNotes, setShowNotes] = useState<boolean>(true);
	const notes = rootNote?.value
		? scaleNotes(rootNote?.value, scale?.value).map((n: any) => n.note)
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

	function getScaleOptions() {
		return [
			{ value: 'major', label: 'Major diatonic' },
			{ value: 'harmonic minor', label: 'Harmonic minor' },
			{ value: 'melodic minor', label: 'Melodic minor' },
			{ value: 'diminished', label: 'Diminished' },
			{ value: 'augmented', label: 'Augmented' },
		];
	}

	function getNeckNotes() {
		const scaleStatuses = SCALE_STATUS_MAP[scale?.value];
		return notes.map((note, index) => ({
			note,
			status: scaleStatuses[index],
		}));
	}

	function handleChangeTuning(option) {
		setTuning(option);
	}

	function handleChangeRootNote(option) {
		setRootNote(option);
	}

	function handleChangeScale(option) {
		setScale(option);
	}

	const scaleName = getScaleOptions().find(s => s.value === scale.value)!.label;

	return (
		<Main>
			<Header>
				<Title>Guitar Neck Visualizer</Title>
			</Header>
			<Neck>
				<Fretboard
					skinType="strings"
					nrOfFrets={12}
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
					<label>Scale</label>
					<Select
						id="scale"
						value={scale}
						placeholder="Select a scale"
						onChange={handleChangeScale}
						options={getScaleOptions()}
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
				<Section>
					<InfoTitle>{scaleName} scale:</InfoTitle>
					<Notes>
						{getNeckNotes().map(({ note, status }) => (
							<Note color={STATUS_COLOR_MAP[status]}>
								{status ? `${status}:` : ''} {note}
							</Note>
						))}
					</Notes>
				</Section>

				<Section>
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
