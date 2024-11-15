import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { Fragment, useEffect, useRef, useState } from "react";


const TerminalContact = () => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <section className="flex flex-col items-center px-4 sm:px-16 py-12 ">
      <div
        ref={containerRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
        className="h-96 bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-scroll shadow-xl cursor-text font-mono"
      >
        <TerminalHeader />
        <TerminalBody inputRef={inputRef} containerRef={containerRef} />
      </div>
    </section>
  );
};

const TerminalHeader = () => {
  return (
    <div className="w-full p-3 bg-dark_navy flex items-center gap-1 sticky top-0">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="text-sm text-slate-200 font-semibold absolute left-[50%] -translate-x-[50%]">
        jasonpeng@myemail.dev
      </span>
    </div>
  );
};

const TerminalBody = ({ containerRef, inputRef }) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  const [questions, setQuestions] = useState(QUESTIONS);

  const curQuestion = questions.find((q) => !q.complete);

  const handleSubmitLine = (value) => {
    if (curQuestion) {
      setQuestions((pv) =>
        pv.map((q) => {
          if (q.key === curQuestion.key) {
            return {
              ...q,
              complete: true,
              value,
            };
          }
          return q;
        })
      );
    }
  };

  return (
    <div className="p-2 text-slate-100 text-lg">
      <InitialText />
      <PreviousQuestions questions={questions} />
      <CurrentQuestion curQuestion={curQuestion} />
      {curQuestion ? (
        <CurLine
          text={text}
          focused={focused}
          setText={setText}
          setFocused={setFocused}
          inputRef={inputRef}
          command={curQuestion?.key || ""}
          handleSubmitLine={handleSubmitLine}
          containerRef={containerRef}
        />
      ) : (
        <Summary questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
};

const InitialText = () => {
  return (
    <>
      <p>Hey there! My name is Jason, I'm excited to connect! 🔗</p>
      <p className="whitespace-nowrap overflow-hidden font-light">
        ------------------------------------------------------------------------
      </p>
    </>
  );
};

const PreviousQuestions = ({ questions }) => {
  return (
    <>
      {questions.map((q, i) => {
        if (q.complete) {
          return (
            <Fragment key={i}>
              <p>
                {q.text || ""}
                {q.postfix && (
                  <span className="text-violet-300">{q.postfix}</span>
                )}
              </p>
              <p className="text-emerald-300">
                <FiCheckCircle className="inline-block mr-2" />
                <span>{q.value}</span>
              </p>
            </Fragment>
          );
        }
        return <Fragment key={i}></Fragment>;
      })}
    </>
  );
};

const CurrentQuestion = ({ curQuestion }) => {
  if (!curQuestion) return <></>;

  return (
    <p>
      {curQuestion.text || ""}
      {curQuestion.postfix && (
        <span className="text-violet-300">{curQuestion.postfix}</span>
      )}
    </p>
  );
};

const API_URL = 'http://localhost:3000';

const Summary = ({ questions, setQuestions }) => {
    const [complete, setComplete] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    const handleReset = () => {
      setQuestions((pv) => pv.map((q) => ({ ...q, value: "", complete: false })));
      setError("");
      setComplete(false);
    };
  
    const handleSend = async () => {
      setIsLoading(true);
      setError("");
      
      try {
        const formData = questions.reduce((acc, val) => {
          return { ...acc, [val.key]: val.value };
        }, {});
  
        console.log('Sending data to:', `${API_URL}/api/contact`);
        console.log('Form data:', formData);
  
        const response = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }
  
        setComplete(true);
      } catch (err) {
        console.error('Error sending message:', err);
        setError(err.message || "Failed to send message. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <>
        <p>Awesome! Here's what we've got:</p>
        {questions.map((q) => {
          return (
            <p key={q.key}>
              <span className="text-blue-300">{q.key}:</span> {q.value}
            </p>
          );
        })}
        <p>Look good?</p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {complete ? (
          <p className="text-emerald-300">
            <FiCheckCircle className="inline-block mr-2" />
            <span>Sent! I'll get back to you ASAP 😎</span>
          </p>
        ) : (
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleReset}
              className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-slate-100 text-black"
              disabled={isLoading}
            >
              Restart
            </button>
            <button
              onClick={handleSend}
              className={`px-3 py-1 text-base hover:opacity-90 transition-opacity rounded ${
                isLoading ? 'bg-indigo-400' : 'bg-indigo-500'
              } text-white`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send it!'}
            </button>
          </div>
        )}
      </>
    );
  };

const CurLine = ({
  text,
  focused,
  setText,
  setFocused,
  inputRef,
  command,
  handleSubmitLine,
  containerRef,
}) => {
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmitLine(text);
    setText("");
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  };

  const onChange = (e) => {
    setText(e.target.value);
    scrollToBottom();
  };

  useEffect(() => {
    return () => setFocused(false);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          onChange={onChange}
          value={text}
          type="text"
          className="sr-only"
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </form>
      <p>
        <span className="text-emerald-400">➜</span>{" "}
        <span className="text-cyan-300">~</span>{" "}
        {command && <span className="opacity-50">Enter {command}: </span>}
        {text}
        {focused && (
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              times: [0, 0.5, 0.5, 1],
            }}
            className="inline-block w-2 h-5 bg-slate-400 translate-y-1 ml-0.5"
          />
        )}
      </p>
    </>
  );
};

export default TerminalContact;

const QUESTIONS = [
  {
    key: "email",
    text: "To start, could you give me ",
    postfix: "your email?",
    complete: false,
    value: "",
  },
  {
    key: "name",
    text: "Thanks! And what's ",
    postfix: "your name?",
    complete: false,
    value: "",
  },
  {
    key: "description",
    text: "Perfect, and ",
    postfix: "your message?",
    complete: false,
    value: "",
  },
];