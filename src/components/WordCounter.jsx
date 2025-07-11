import { useState } from "react";
import "../styles/WordCounter.css";

export default function WordCounter() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [wordCount, setWordCount] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const [specificCount, setSpecificCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [manualLyrics, setManualLyrics] = useState(false);

  const fetchLyrics = async () => {
    setLoading(true);
    setError("");
    setLyrics("");
    setWordCount({});
    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artist}/${title}`
      );
      const data = await response.json();
      if (data.lyrics) {
        setLyrics(data.lyrics);
        countWords(data.lyrics);
      } else {
        setError("Lyrics not found.");
      }
    } catch {
      setError("Error fetching lyrics.");
    } finally {
      setLoading(false);
    }
  };

  const countWords = (text) => {
    const cleaned = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const countMap = {};
    cleaned.forEach((word) => {
      countMap[word] = (countMap[word] || 0) + 1;
    });

    setWordCount(countMap);

    if (searchWord) {
      countSpecificWord(searchWord, countMap);
    }
  };

  const countSpecificWord = (word, wordMap) => {
    const lower = word.toLowerCase().trim();
    setSpecificCount(wordMap[lower] || 0);
  };

  const handleManualLyrics = () => {
    countWords(lyrics);
  };

  return (
    <div className="word-counter-container">
      <div className="manual-toggle">
        <label className="manual-lyrics-label">
  <input
    type="checkbox"
    checked={manualLyrics}
    onChange={() => setManualLyrics(!manualLyrics)}
  />
  <span>Paste Lyrics Manually</span>
</label>

      </div>

      {!manualLyrics && (
        <div className="input-group">
          <input
            type="text"
            placeholder="Artist Name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input
            type="text"
            placeholder="Song Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      )}

      {!manualLyrics ? (
        <button
          onClick={fetchLyrics}
          className="btn"
          disabled={loading || !artist || !title}
        >
          {loading ? "Fetching Lyrics..." : "Get Lyrics & Count Words"}
        </button>
      ) : (
        <>
          <textarea
            placeholder="Paste your lyrics here..."
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            rows={10}
          />
          <button onClick={handleManualLyrics} className="btn">
            Count Words
          </button>
        </>
      )}

      {error && <p className="error-message">{error}</p>}

      {lyrics && (
        <>
          <textarea value={lyrics} readOnly rows={10} />

          <div className="specific-search">
            <input
              type="text"
              placeholder="Search specific word"
              value={searchWord}
              onChange={(e) => {
                setSearchWord(e.target.value);
                countSpecificWord(e.target.value, wordCount);
              }}
            />
            {searchWord && (
              <p>
                <strong>{searchWord}</strong> appears{" "}
                <strong>{specificCount}</strong> times.
              </p>
            )}
          </div>

          <div className="word-frequencies">
            <h3>All Word Frequencies:</h3>
            <div className="word-list">
              {Object.entries(wordCount)
                .sort((a, b) => b[1] - a[1])
                .map(([word, count]) => (
                  <div key={word} className="word-item">
                    <strong>{word}</strong>: {count}
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
