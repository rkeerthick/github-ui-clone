import list from "../list.json";
import profilePic from "../assets/images/profile-pic.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { listType } from "../types/ListType";

const MainLeft = () => {
  return (
    <div className="mainLeftContainer">
      <div className="mainLeft">
        {/* Name */}
        <div className="mainLeftName">
          <img src={profilePic} alt="" />
          <h2>Keerthick</h2>
          <IoMdArrowDropdown />
        </div>

        {/* Line */}
        <div className="line" />

        {/* Recent Repo */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Repository:</h2>
            <button>New</button>
          </div>
          <div className="inputBox">
            <input type="text" placeholder="Enter repository name..." />
          </div>
        </div>

        {/* List */}
        <div className="mainLeftList">
          {list.map((item: listType, index: number) => (
            <div className="item" key={index}>
              <img src={profilePic} alt="" />
              <div className="">
                <h2>{`${item.name}/${item.repo}`}</h2>
              </div>
            </div>
          ))}
          <a href="#">Show more</a>
        </div>

        {/* Line */}
        <div className="line" />

        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Recent Activities</h2>
          </div>
          <p>Thanks for watching</p>
        </div>

        <div className="line" />

        {/* Recent Repo */}
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Your Teams</h2>
          </div>
          <div className="inputBoxTwo">
            <input type="text" placeholder="Find a team..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
