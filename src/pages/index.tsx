import { GetStaticProps } from 'next';
import dbConnect from '@/lib/dbConnect';
import TestModel from '@/models/TestModel';

interface Props {
	test: string;
}

export const getStaticProps: GetStaticProps = async () => {
	await dbConnect();

	// @ts-ignore
	const res = await TestModel.find({}, '-_id -__v');
	const test = res.map((doc) => doc.toObject());

	return { props: { test }, revalidate: 10 };
};

const Home = ({ test }: Props) => {
	return <p className="p-4">{JSON.stringify(test)}</p>;
};

export default Home;
