import React from 'react';
import './board.css';

function Board() {
  return (
    <div>
      <h1>Board</h1>
      <iframe src="coffin.mp3" title="coffin music" allow="autoplay;loop" id="iframeAudio" className="mp3Player"></iframe> 
      <div className="board-wrapper">
        <table className="board-table">
          <tr>
            <th>Category 1</th>
            <th>Category 2</th>
            <th>Category 3</th>
            <th>Category 4</th>
            <th>Category 5</th>
            <th>Category 6</th>
          </tr>
          <tr>
            <td><button>100</button></td>
            <td><button>100</button></td>
            <td><button>100</button></td>
            <td><button>100</button></td>
            <td><button>100</button></td>
            <td><button>100</button></td>
          </tr>
          <tr>
            <td><button>200</button></td>
            <td><button>200</button></td>
            <td><button>200</button></td>
            <td><button>200</button></td>
            <td><button>200</button></td>
            <td><button>200</button></td>
          </tr>
          <tr>
            <td><button>300</button></td>
            <td><button>300</button></td>
            <td><button>300</button></td>
            <td><button>300</button></td>
            <td><button>300</button></td>
            <td><button>300</button></td>
          </tr>
          <tr>
            <td><button>400</button></td>
            <td><button>400</button></td>
            <td><button>400</button></td>
            <td><button>400</button></td>
            <td><button>400</button></td>
            <td><button>400</button></td>
          </tr>
          <tr>
            <td><button>500</button></td>
            <td><button>500</button></td>
            <td><button>500</button></td>
            <td><button>500</button></td>
            <td><button>500</button></td>
            <td><button>500</button></td>
          </tr>
          <tr>
            <td><button>600</button></td>
            <td><button>600</button></td>
            <td><button>600</button></td>
            <td><button>600</button></td>
            <td><button>600</button></td>
            <td><button>600</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Board;
