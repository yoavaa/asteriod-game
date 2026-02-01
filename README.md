# Asteroids - Modern Edition

A modern take on the classic Asteroids arcade game, built as a demo project for the [Design-Log Methodology](https://github.com/yoavaa/design-log-methodology).

## About This Project

This project demonstrates the **Design-Log Methodology** in practice - a structured approach to AI-assisted software development that eliminates "context drift" and transforms AI from a simple coder into a true architectural partner.

Every significant feature in this game was designed through a design log before implementation, showing how the methodology enables:
- **Zero-Drift Implementation**: AI maintains architectural consistency across features
- **Simple Prompting**: Complex features initiated with single sentences
- **Traceable Decisions**: Full history of design choices and rationale

## The Game

A canvas-based Asteroids game featuring:
- Ship movement with thrust physics
- Multiple asteroid sizes (Small, Medium, Large, X-Large)
- Wave-based progression with increasing difficulty
- Bonus power-ups (Score bonuses, Triple Shot)
- Particle effects and screen shake
- Health system with damage feedback

### Controls
- **A/D** or **←/→** - Rotate ship
- **W** or **↑** - Thrust
- **Space** - Shoot

## Design Logs

The `./design-log/` folder contains the design documents created during development:

| # | Title | Description |
|---|-------|-------------|
| 001 | Initial Design | Core game mechanics and architecture |
| 002 | Bonus Packages | Power-up system design |

## Running the Game

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## Learn More

- [Design-Log Methodology](https://github.com/yoavaa/design-log-methodology) - The methodology used to build this project
- [Why I Stop Prompting and Start Logging](https://github.com/yoavaa/design-log-methodology/blob/main/Why%20I%20Stop%20Prompting%20and%20Start%20Logging_%20The%20Design-Log%20Methodology.pdf) - Deep dive presentation

## License

MIT
