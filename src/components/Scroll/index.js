import './index.css'

const Scroll = () => (
  <div className="Scroll-container">
    <h1>Trusted Matrimony & Matchmaking Service</h1>
    <div className="Scroll-container1">
      <div className="heading">
        <p>I am Looking for a</p>
        <select className="select1">
          <option>Woman</option>
          <option>Man</option>
        </select>
      </div>

      <div className="heading">
        <div>
          <p>aged</p>
          <select className="overflow-age, select2">
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
            <option>33</option>
            <option>34</option>
            <option>35</option>
          </select>
        </div>
      </div>

      <div className="heading">
        <p>Of Religion</p>
        <select className="select3">
          <option>Select</option>
          <option>Hindhu</option>
          <option>Muslim</option>
          <option>Chistian</option>
          <option>Sikh</option>
          <option>Parsi</option>
        </select>
      </div>

      <div className="heading">
        <p>And Mother Tounge</p>
        <select className="select4">
          <option>Select</option>
          <option>Telugu</option>
          <option>Hindi</option>
          <option>Marati</option>
          <option>Panjabi</option>
          <option>Bengali</option>
        </select>
      </div>
      <button className="begin-btn">Let's Begin</button>
    </div>
  </div>
)
export default Scroll
