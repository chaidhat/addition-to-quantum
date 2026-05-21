# Schrödinger’s Equation, Hamiltonian I

Recall from [[particle-energies]] that

$$\begin{gather*}
    \left\lvert \psi(0) \right\rangle=\sum_kc_k\left\lvert E_k \right\rangle
\end{gather*}$$

Because we learned this thing called [[particle-phases]], we can say that particle
oscillate at different phases. This is shown using phases

$$\begin{gather*}
    \left\lvert \psi(t) \right\rangle=\sum_kc_ke^{-i\omega_kt}\left\lvert E_k \right\rangle\\
    =\sum_kc_ke^{-iE_kt/\hbar}\left\lvert E_k \right\rangle\\
\end{gather*}$$

If we take the derivative from both sides

$$\begin{gather*}
    \frac{d}{dt}\left\lvert \psi(t) \right\rangle=\frac{d}{dt}\left[\sum_kc_ke^{-iE_kt/\hbar}\left\lvert E_k \right\rangle\right]\\
    =\sum_kc_k\cdot \left(-i\frac{E_k}{\hbar}\right)e^{-iE_kt/\hbar}\left\lvert E_k \right\rangle\\
    =-\frac{i}{\hbar}\sum_kc_k\cdot E_ke^{-iE_kt/\hbar}\left\lvert E_k \right\rangle
\end{gather*}$$

Let the Hamiltonian $H$be an [[operators|operator]] where this is true

$$\begin{gather*}
    H\left\lvert E_k \right\rangle=E_k\left\lvert E_k \right\rangle
\end{gather*}$$

so

$$\begin{gather*}
    =-H\frac{i}{\hbar}\sum_kc_k\cdot e^{-iE_kt/\hbar}\left\lvert E_k \right\rangle\\
    =-\frac{i}{\hbar}H\left\lvert \psi(t) \right\rangle
\end{gather*}$$

which gives us Schrödinger’s equation (in state-vector form)

$$\begin{gather*}
    i\hbar\frac{d}{dt}\left\lvert \psi(t) \right\rangle=H\left\lvert \psi(t) \right\rangle
\end{gather*}$$
