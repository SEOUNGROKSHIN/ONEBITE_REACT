const Viewer = ({ habit, setHabit }) => {
    const handleChange = (e) => {
        setHabit(e.target.value);  // habit만 업데이트
    };

    return <input value={habit} onChange={handleChange} />;
};
export default Viewer