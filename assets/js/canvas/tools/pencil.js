function BugReportPencilCanvasTool(canvas, context, wrap) {
    this.points = [];
    this.started = false;
    this.width = 0;
    this.height = 0;

    this.init = () => {
        canvas.addEventListener('mousedown', this.mouseDown, false);
        canvas.addEventListener('mousemove', this.mouseMove, false);
        canvas.addEventListener('mouseup', this.mouseUp, false);
    }

    this.destroy = () => {
        canvas.removeEventListener('mousedown', this.mouseDown, false);
        canvas.removeEventListener('mousemove', this.mouseMove, false);
        canvas.removeEventListener('mouseup', this.mouseUp, false);
    }

    this.setSize = (width, height) => {
        this.width = width;
        this.height = height;
    }

    this.mouseDown = (e) => {
        let mouse = this.getMouse(e);
        this.points.push({
            x: mouse.x,
            y: mouse.y
        });
        this.started = true;
    };

    this.mouseMove = (e) => {
        if (!this.started) {
            return;
        }

        context.drawImage(canvas, 0, 0);

        let mouse = this.getMouse(e);
        this.points.push({
            x: mouse.x,
            y: mouse.y
        });
        this.drawPoints();
    };

    this.mouseUp = (e) => {
        if (!this.started) {
            return;
        }

        this.started = false;
        context.drawImage(canvas, 0, 0);
        this.points = [];
    };

    this.drawPoints = () => {
        if (this.points.length < 6) {
            var b = this.points[0];
            context.beginPath(), context.arc(b.x, b.y, context.lineWidth / 2, 0, Math.PI * 2, !0), context.closePath(), context.fill();
            return;
        }

        context.beginPath(), context.moveTo(this.points[0].x, this.points[0].y);
        for (i = 1; i < this.points.length - 2; i++) {
            var c = (this.points[i].x + this.points[i + 1].x) / 2,
                d = (this.points[i].y + this.points[i + 1].y) / 2;
            context.quadraticCurveTo(this.points[i].x, this.points[i].y, c, d)
        }
        context.quadraticCurveTo(this.points[i].x, this.points[i].y, this.points[i + 1].x, this.points[i + 1].y), context.stroke()
    }

    this.getMouse = (e) => {
        let height = $(wrap).height();
        let width = $(wrap).width();

        let coefX = width / this.width;
        let coefY = height /this.height;

        return {x: e.offsetX / coefX, y: e.offsetY / coefY};
    }
}