# Basic Distinguishability Theory

This refines [[basic-decoding-theory]].

Probability of successfully distinguishing between two equally likely pure states $\left\lvert \alpha_0 \right\rangle, \left\lvert \alpha_1 \right\rangle$ where $\left\langle \alpha_0|\alpha_1 \right\rangle=\cos\theta$ is
$$P_s\leq \frac{1}{2}(1+\sin\theta)$$

Example I

We want to find the optimal measurement to distinguish between two equally likely pure states $\left\lvert \alpha_0 \right\rangle, \left\lvert \alpha_1 \right\rangle$ where $\left\langle \alpha_0|\alpha_1 \right\rangle=\cos\theta$.
We can try to do

$$\left\lvert \alpha_0 \right\rangle=\left\lvert 0 \right\rangle\quad\left\lvert \alpha_1 \right\rangle=\left\lvert + \right\rangle$$
$$\cos\theta =\sin\theta=\frac{1}{\sqrt{2}}$$
and there are is a $\left\lvert 1 \right\rangle$ basis that is ortho to $\left\lvert 0 \right\rangle$. If we measure and get $\left\lvert 1 \right\rangle$ it couldn’t have come from $\left\lvert \alpha_0 \right\rangle$

But it isn’t optimal

Example II

The optimal way is to get the bisection angle between $\left\lvert \alpha_1 \right\rangle,\left\lvert \alpha_0 \right\rangle$
$$P_s(\tau)=P(\alpha_0)P(\text{measure $k_0$ given $\left\lvert \alpha_0 \right\rangle$})+P(\alpha_1)P(\text{measure $k_1$ given $\left\lvert \alpha_1 \right\rangle$})\\
$$
$$=\frac{1}{2}\cos^2(\tau)+\frac{1}{2}\cos^2(\frac{\pi}{2}-\tau-\theta)$$
Optimize to get
$$\tau^*=\frac{1}{2}\left(\frac{\pi}{2}-\theta\right)\\
$$
$$\Rightarrow\max P_s(\tau)=\frac{1}{2}\cos^2\left(\frac{\pi}{4}-\frac{\theta}{2}\right)+\frac{1}{2}\cos^2(\frac{\pi}{4}-\frac{\theta}{2})\\
$$
$$=\frac{1}{2}\left(1+\sin\theta\right)$$
