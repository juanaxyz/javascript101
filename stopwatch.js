function StopWatch() {
    let isStarted = false;

    this.duration = 0;
    let selisihMS = 0;

    let time = {
        start: null,
        end: null
    };



    this.start = function () {
        if (isStarted) {
            throw new Error('Stopwatch sudah di mulai');
        }

        if (typeof (time.start) !== 'number') {

            time.start = Date.now();
        }
        console.log('timer dimulai');
        // console.log(typeof(time.start));

        // console.log(time.start);

        isStarted = true;

    }

    this.stop = function () {
        if (!isStarted) {
            throw new Error('Stopwatch belum di mulai')
        }

        time.end = Date.now();
        console.log('timer berhenti');
        isStarted = false;
        selisihMS = time.end - time.start;
        this.duration = selisihMS / 1000

    }

    this.reset = function () {
        isStarted = false;
        time.start = null;
        time.end = null;
        this.duration = 0;
        console.log('Timer sudah di-reset');

    }


}


const sw = new StopWatch();
sw.start();

setTimeout(() => {
    sw.stop();

    console.log(sw.duration);
    
}, 5000);