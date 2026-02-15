
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Exam({ examId, studentId }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/questions/exam/${examId}`)
      .then(res => setQuestions(res.data));
  }, [examId]);
  const submitAnswer = (qId, answer) => {
    axios.post('http://localhost:3000/answers', { student_id: studentId, question_id: qId, answer })
      .then(res => alert('تم تسجيل الإجابة، الدرجة: ' + res.data.score));
  }
  return (
    <div>
      <h2>الاختبار</h2>
      {questions.map(q => (
        <div key={q.id}>
          <p>{q.question_text}</p>
          {q.type === 'mcq' && q.options.map(opt => (
            <button key={opt} onClick={() => submitAnswer(q.id, opt)}>{opt}</button>
          ))}
        </div>
      ))}
    </div>
  );
}
